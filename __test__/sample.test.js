const frisby = require("frisby");
const qs = require("qs");

//data
const data = {
    email: "test@test.local",
    body: "This is a test.",
}

//API URL
//email, bodyというパラメータを受取りOKなら[受付ました]と返すAPI
const test_url = "https://script.google.com/macros/s/{deploy_id}/exec";

//test
it("GAS APIテスト1", async () => {
    const res = await frisby.post(test_url, {
        body: qs.stringify({
            email: "eizaburo",
            body: "hoge"
        }),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    });
    //評価
    expect(res._body).toBe("受付ました。");
})