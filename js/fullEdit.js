const fs = require("fs");

//fsで読み込んだJSONをparseしてオブジェクト化
let pokeObject = JSON.parse(fs.readFileSync("../data/pokedex.json", "utf8"));
const result = {};

//処理前のタイプ確認
console.log(pokeObject[0].type);
//処理前の中国語のフシギダネでテスト
console.log(pokeObject[0].name.chinese);
//処理前のsrcプロパティを確認
console.log(pokeObject[0].src);

//処理開始dayo
for (let objectIndex in pokeObject) {
	//画像のパスを付与する
	if (pokeObject[objectIndex].id < 10) {
		pokeObject[objectIndex].src = {};
		pokeObject[objectIndex].src.normal =
			"/images/00" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.small =
			"/thumbnails/00" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.icon =
			"/images/sprites/00" + pokeObject[objectIndex].id + "MS.png";
	} else if (pokeObject[objectIndex].id < 100) {
		pokeObject[objectIndex].src = {};
		pokeObject[objectIndex].src.normal =
			"/images/0" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.small =
			"/thumbnails/0" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.icon =
			"/images/sprites/0" + pokeObject[objectIndex].id + "MS.png";
	} else {
		pokeObject[objectIndex].src = {};
		pokeObject[objectIndex].src.normal =
			"/images/" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.small =
			"/thumbnails/" + pokeObject[objectIndex].id + ".png";
		pokeObject[objectIndex].src.icon =
			"/images/sprites/" + pokeObject[objectIndex].id + "MS.png";
	}

	//名前の処理
	pokeObject[objectIndex].name = pokeObject[objectIndex].name.japanese;
	delete pokeObject[objectIndex].name.japanese;
	delete pokeObject[objectIndex].name.chinese;
	delete pokeObject[objectIndex].name.english;
	delete pokeObject[objectIndex].name.french;
	// const typeFirst = pokeObject[objectIndex].type[0];
	// const typeSecond = pokeObject[objectIndex].type[1];

	//一つ目のタイプを変換
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Grass",
		"くさ",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Fire",
		"ほのお",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Water",
		"みず",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Electric",
		"でんき",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Flying",
		"ひこう",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Poison",
		"どく",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Bug",
		"むし",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Normal",
		"ノーマル",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Ground",
		"じめん",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Fairy",
		"フェアリー",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Fighting",
		"ひこう",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Rock",
		"いわ",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Ghost",
		"ゴースト",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Psychic",
		"エスパー",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Dark",
		"あく",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Steel",
		"はがね",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Ice",
		"こおり",
	);
	pokeObject[objectIndex].type[0] = pokeObject[objectIndex].type[0].replace(
		"Dragon",
		"ドラゴン",
	);
	if (pokeObject[objectIndex].type.length == 2) {
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Grass",
			"くさ",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Fire",
			"ほのお",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Water",
			"みず",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Electric",
			"でんき",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Flying",
			"ひこう",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Poison",
			"どく",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Bug",
			"むし",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Normal",
			"ノーマル",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Ground",
			"じめん",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Fairy",
			"フェアリー",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Fighting",
			"かくとう",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Rock",
			"いわ",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Ghost",
			"ゴースト",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Psychic",
			"エスパー",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Dark",
			"あく",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Steel",
			"はがね",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Ice",
			"こおり",
		);
		pokeObject[objectIndex].type[1] = pokeObject[objectIndex].type[1].replace(
			"Dragon",
			"ドラゴン",
		);
	}
}
//処理後のタイプ確認
console.log(pokeObject[0].type);
//処理後のフシギダネでテスト
console.log(pokeObject[0].name);
//処理後の2匹でテスト
console.log(pokeObject[0].src);
console.log(pokeObject[100].src);
//処理後のオブジェクトをJSONへ変換し、fsでpoke.jsonとして出力。
fs.writeFile("../newdata/pokemon.json", JSON.stringify(pokeObject), (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("Data Edit Complete！");
	}
});
