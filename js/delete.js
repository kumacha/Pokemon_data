const fs = require("fs");

//fsで読み込んだJSONをparseしてオブジェクト化
let pokeObject = JSON.parse(fs.readFileSync("../data/pokedex.json", "utf8"));
const result = {};
//処理前の中国語のフシギダネでテスト
console.log(pokeObject[0].name.chinese);

for (index in pokeObject) {
	pokeObject[index].name = pokeObject[index].name.japanese;
	delete pokeObject[index].name.japanese;
	delete pokeObject[index].name.chinese;
	delete pokeObject[index].name.english;
	delete pokeObject[index].name.french;
}
//処理後の中国語のフシギダネでテスト
console.log(pokeObject[0].name);
//処理後のオブジェクトをJSONへ変換し、fsでpoke.jsonとして出力。
fs.writeFile("../newdata/name.json", JSON.stringify(pokeObject), (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("不要な言語処理完了！");
	}
});
