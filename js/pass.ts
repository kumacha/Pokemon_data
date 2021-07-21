import * as fs from 'fs';

//fsで読み込んだJSONをparseしてオブジェクト化
let pokeObject : object = JSON.parse(fs.readFileSync("../data/pokedex.json", "utf8"));
const result : object = {};
//処理前のsrcプロパティを確認
console.log(pokeObject[0].src);

//全てのオブジェクトにsrcプロパティを付与し、画像のパスを付与する
for (let index in pokeObject) {
	if (pokeObject[index].id < 100) {
		pokeObject[index].src = {};
		pokeObject[index].src.normal =
			"~/assets/images/00" + pokeObject[index].id + ".png";
		pokeObject[index].src.small =
			"~/assets/thumbnails/00" + pokeObject[index].id + ".png";
		pokeObject[index].src.icon =
			"~/assets/images/sprites/00" + pokeObject[index].id + "MS.png";
	} else {
		pokeObject[index].src = {};
		pokeObject[index].src.normal =
			"~/assets/images/00" + pokeObject[index].id + ".png";
		pokeObject[index].src.small =
			"~/assets/thumbnails/00" + pokeObject[index].id + ".png";
		pokeObject[index].src.icon =
			"~/assets/images/sprites/00" + pokeObject[index].id + "MS.png";
	}
}
//処理後の2匹でテスト
console.log(pokeObject[0].src);
console.log(pokeObject[120].src.normal);
//処理後のオブジェクトをJSONへ変換し、fsでpoke.jsonとして出力。
fs.writeFile("../newdata/image.json", JSON.stringify(pokeObject), (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("画像パス付与完了！");
	}
});
