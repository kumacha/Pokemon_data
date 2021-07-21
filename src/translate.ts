import * as fs from 'fs';

//fsで読み込んだJSONをparseしてオブジェクト化
let pokeObject : object  = JSON.parse(fs.readFileSync("../data/pokedex.json", "utf8"));
const result : object  = {};
//処理前のタイプ確認
console.log(pokeObject[0].type);
//処理開始
for (let objectIndex in pokeObject) {
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
			"Nomal",
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
			"ひこう",
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
//処理後のオブジェクトをJSONへ変換し、fsでpoke.jsonとして出力。
fs.writeFile("../newdata/type.json", JSON.stringify(pokeObject), (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("タイプ変換完了！");
	}
});
