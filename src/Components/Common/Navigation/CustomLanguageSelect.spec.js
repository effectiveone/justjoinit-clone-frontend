import React from "react";
import { shallow } from "enzyme";
import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CustomLanguageSelect from "./CustomLanguageSelect";
import { devIcons } from "../../Utils/devIcons";

describe("CustomLanguageSelect", () => {
  let wrapper;
  const handleLanguageClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CustomLanguageSelect handleLanguageClick={handleLanguageClick} />
    );
  });

  it("should render IconButton", () => {
    expect(wrapper.find(IconButton)).toHaveLength(1);
  });

  it("should open Menu on IconButton click", () => {
    wrapper.find(IconButton).simulate("click");
    expect(wrapper.find(Menu).prop("open")).toEqual(true);
  });

  it("should call handleClose when Menu is closed", () => {
    const handleClose = jest.spyOn(wrapper.instance(), "handleClose");
    wrapper.instance().forceUpdate();
    wrapper.find(Menu).simulate("close");
    expect(handleClose).toHaveBeenCalled();
  });

  it("should render correct number of MenuItems", () => {
    const menuItems = wrapper.find(MenuItem);
    expect(menuItems).toHaveLength(devIcons.length);
  });

  it("should call handleLanguageClick with correct argument when a MenuItem is clicked", () => {
    const menuItemIndex = 1;
    const menuItem = wrapper.find(MenuItem).at(menuItemIndex);
    menuItem.simulate("click");
    expect(handleLanguageClick).toHaveBeenCalledWith(
      devIcons[menuItemIndex].name
    );
  });

  it("should render the icon and name for each MenuItem", () => {
    const menuItems = wrapper.find(MenuItem);
    menuItems.forEach((menuItem, index) => {
      const language = devIcons[index];
      const icon = menuItem.find(`.${language.icon}`);
      const typography = menuItem.find(Typography).at(0);

      expect(icon).toHaveLength(1);
      expect(icon.prop("style")).toHaveProperty("color", language.background);
      expect(typography.text()).toEqual(language.name);
    });
  });

  it("should render Grid and Typography for each MenuItem", () => {
    const menuItems = wrapper.find(MenuItem);
    menuItems.forEach((menuItem) => {
      expect(menuItem.find(Grid)).toHaveLength(1);
      expect(menuItem.find(Typography)).toHaveLength(1);
    });
  });
});
