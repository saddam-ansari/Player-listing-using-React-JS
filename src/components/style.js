export const styles = {
  container: {
    backgroundColor: "#EFEFEF",
    width: "100%",
    minHeight: "700px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "60px",
    backgroundColor: "#002B5B",
  },
  logo_font: {
    fontFamily: "Noto Sans Hebrew",
    fontSize: "2rem",
    color: "#FEFBF6",
  },
  sub_header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    fontFamily: "Poppins",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#002B5B",
    marginLeft: "60px"
  },
  search_box: {
    border: "2px solid #002B5B",
    display: "flex",
    flexDirection: "row",
    padding: "10px 10px",
    backgroundColor: "#EFEFEF",
    borderRadius: "6px",
    width: "40%",
    height: "30px",
    alignItems: "center",
    marginRight: "50px"
  },
  search_icon: {
    width: "32px",
    height: "32px",
  },

  search_input: {
    backgroundColor: "#EFEFEF",
    color: "#000000",
    fontFamily: "Inter",
    fontSize: "1rem",
    width: "50%",
    fontWeight: "bold",
    border: "none",
    outline: "none",
    marginLeft: "15px",
  },
  grid_box: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 700px)",
    columnGap: "20px",
    gridTemplateRows: "repeat(auto, 350px)",
    rowGap: "30px",
    marginTop: "20px",
    marginLeft: "10px",
  },
  grid_items: {
    width: "700px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    borderRadius: "8px",
    flexDirection: "row",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
  },

  grid_content: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    paddingLeft: "20px",
  },
  content_items1: {
    fontFamily: "Poppins",
    fontWeight: '500',
    fontSize: "1.2rem",
    color: "#000000",
    lineHeight: "60px"
  },
  content_items2: {
    fontFamily: "Poppins",
    fontWeight: '300',
    fontSize: "1.1rem",
    color: "#000000",
    lineHeight: "50px"
  },

  grid_image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  no_player_list: {
    fontFamily: "Poppins",
    fontSize: "2rem",
    fontWeight: "600",
  }
};
