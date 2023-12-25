
import "./SearchBar.css";
import searchIcon from "../../../Assests/Search icon.png";

/**
 * Represents the search bar component.
 * Renders a search bar with an input field and a search icon.
 * @returns {JSX.Element} The rendered search bar component.
 */
const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="search" placeholder="Search an album of your choice" />
      <div className="searchIconCont">
        <img src={searchIcon} className="searchImage" alt="search Icon" />
      </div>
    </div>
  );
};

export default SearchBar;