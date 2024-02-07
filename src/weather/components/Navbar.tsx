import { FormEvent } from "react";
import search_icon from "/assets/search.png";
import { Input, SearchIcon, TopBar } from "../../customStyle/customStyled";

type Props = {
  handleSubmit: (e: FormEvent) => Promise<void>;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Navbar = (props: Props) => {
  const { handleSubmit, onChangeInput } = props;
  return (
    <TopBar onSubmit={handleSubmit}>
      <Input name="cityInput" placeholder="search" onChange={onChangeInput} />
      <SearchIcon type="submit">
        <img src={search_icon} alt="search-icon" />
      </SearchIcon>
    </TopBar>
  );
};
