export default class User {
  constructor() {
    this._api = "http://localhost:3000/users";
  }

  _getUser = async (id) => {
    const users = await fetch(this._api).then((response) => response.json());

    return users.find((user) => user.id === id);
  };

  _postData = async ({ body, method, index = "" }) => {
    if (index) {
      index = `/${index}`;
    }
    const result = await fetch(`${this._api}${index}`, {
      method: method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());

    return result;
  };

  updateValue = async ({ id, value, key }) => {
    const user = await this._getUser(id);

    const newData = this._postData({
      body: {
        ...user,

        [key]: value,
      },
      method: "PUT",
      index: user.id,
    });

    return newData;
  };

  signup = async ({ id, password }) => {
    if (await this._getUser(id)) {
      return { userData: undefined, error: "Account already exists" };
    }

    const user = await this._postData({
      method: "POST",
      body: { id: id, password: password, data: [] },
    });

    return { userId: id, userData: user.data, error: undefined };
  };

  login = async ({ id, password }) => {
    const user = await this._getUser(id);

    if (!user) {
      return { userData: undefined, error: "Account doesnt exist" };
    }

    return user.password === password
      ? { userId: id, userData: user.data, error: undefined }
      : { userData: user.data, error: "Invalid password" };
  };
}
