import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "https://cryptic-wildwood-94139.herokuapp.com")
  : // (baseURL = window.location.origin)
    (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async (user) => {
    return await service.post("/signup", user);
  },
  logIn: async (user) => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  getQuestions: async () => {
    return await service.get("/quiz");
  },
  getDefinitions: async () => {
    return await service.get("/definition");
  },
  inputNotes: async (state) => {
    return await service.post("/note", state);
  },
  showNotes: async () => {
    return await service.get("/note");
  },
  getItems: async () => {
    return await service.get("/items");
  },
  addItemToCart: async (data) => {
    return await service.post("/cart", data);
  },
  newItem: async (data) => {
    return await service.post("/items", data);
  },
};

export default actions;
