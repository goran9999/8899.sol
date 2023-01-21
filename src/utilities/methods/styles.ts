export const customStylesSelect = {
  option: () => ({
    cursor: "pointer",
    fontSize: "0.9em",
    fontFamily: "Montserrat,sans-serif",
    fontWeight: 100,
    backgroundColor: "#0c121d",
    overflow: "scroll",
    margin: 0,
    zIndex: 50,
    width: "100%",
    padding: "10px 0",
    "&:hover": {
      opacity: 0.5,
      color: "white",
      cursor: "pointer",
    },
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "white",
  }),
  menu: (provided: any) => ({
    ...provided,
    display: "flex",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "#0c121d",
    overflow: "scroll",
  }),
  menuList: (provided: any) => ({
    ...provided,
    borderRadius: "8px",
    width: "100%",
    fontSize: "20px",
    overflow: "scroll",
  }),
  input: (provided: any) => ({
    ...provided,
    color: "white",
    fontSize: "0.9em",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    whiteSpace: "nowrap",
    overflow: "hidden",
    flexWrap: "nowrap",
    color: "white",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontSize: "0.9em",
    fontWeight: "100",
    fontFamily: "Montserrat, sans-serif",
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: "4px",
    fontSize: "0.9em",
    cursor: "pointer",
    background: "#0c121d",
    border: "1px solid #46fe6e",
    color: "white",
    fontFamily: "Montserrat",
    boxShadow: "none",
    height: "30px",
    padding: "0 1em",
    maxWidth: "15em",
    width: "15em",
    span: { display: "none" },
  }),
};

export const customStylesSelectSeed = {
  ...customStylesSelect,
  control: (provided: any) => ({
    ...provided,
    ...customStylesSelect.control(provided),
    marginTop: "1.25em",
  }),
};

export const customStylesSelectAccount = {
  ...customStylesSelect,
  control: (provided: any) => ({
    ...provided,
    ...customStylesSelect.control(provided),
    width: "100%",
    maxWidth: "100%",
  }),
};
