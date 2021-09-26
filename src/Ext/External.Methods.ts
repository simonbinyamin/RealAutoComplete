
import * as vscode from 'vscode';


export interface IHash {
    [detalis: string]: string;
}

export function UnCheck(value: string) {
    let word = "";
    for (let i = 0; i < value.length; i++) {
        word+=map[value[i]];
        
    }
    return word;
}


export function ToCheck(values: string[]){
   
    let list = [];
    for (let index = 0; index < values.length; index++) {
        let astr = "";
        for (let i = 0; i < values[index].length; i++) {
            for (let key in map) {
                let val = map[key];
                if(values[index][i]==val) {
                    astr+=key;
                }
            
            }
        }
        list.push(astr);
}

console.log(list);
}
export let map: IHash = {};   

map["1"] = "1";
map["6"] = "6";
map["3"] = "3";
map["2"] = "2";
map["6"] = "6";
map["4"] = "4";
map["!"] = "A";
map["#"] = "a";
map["¤"] = "B";
map["%"] = "b";
map["&"] = "C";
map["/"] = "c";
map["("] = "D";
map[")"] = "d";
map["="] = "E";
map["?"] = "e";
map["*"] = "F";
map["f"] = "f";
map["G"] = "G";
map["-"] = "g";
map["_"] = "H";
map["h"] = "h";
map[":"] = "I";
map["i"] = "i";
map[";"] = "J";
map["¡"] = "j";
map["@"] = "K";
map["£"] = "k";
map["$"] = "L";
map["€"] = "l";
map["¥"] = "M";
map["{"] = "m";
map["["] = "N";
map["]"] = "n";
map["}"] = "O";
map["±"] = "o";
map["|"] = "P";
map["0"] = "p";
map["5"] = "Q";
map["7"] = "q";
map["8"] = "R";
map["9"] = "r";
map["V"] = "V";
map["v"] = "v";
map["S"] = "S";
map["s"] = "s";
map["T"] = "T";
map["t"] = "t";
map["U"] = "U";
map["u"] = "u";
map["W"] = "W";
map["w"] = "w";
map["."] = "X";
map["x"] = "x";
map["Y"] = "Y";
map["y"] = "y";
map[","] = "Z";
map["z"] = "z";
map["<"] = "<";
map[">"] = ">";


