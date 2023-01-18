const places = get()
const board = [];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
const text = document.getElementById("variant");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const info = document.getElementsByClassName("info")[0];
const canvas = document.getElementsByTagName("canvas");

var variant = 1;

function HorizontalCheck(arr) {
    for (let i = 1; i < 9; i++)
        for (let j = i + 1; j < 9; j++)
            if (arr[i] == arr[j])
                return false;

    return true;
}

function DiagonalCheck(arr) {
    for (let i = 1; i < 9; i++)
        for (let j = i + 1; j < 9; j++)
            if (Math.abs(arr[i] - arr[j]) == Math.abs(j - i))
                return false;

    return true;
}

function get() {
    let x = 1;
    let arr = [];
    let result = [];

    for (let a = 1; a < 9; a++) {
        arr[1] = a;
        for (let b = 1; b < 9; b++) {
            arr[2] = b;
            for (let c = 1; c < 9; c++) {
                arr[3] = c;
                for (let d = 1; d < 9; d++) {
                    arr[4] = d;
                    for (let e = 1; e < 9; e++) {
                        arr[5] = e;
                        for (let f = 1; f < 9; f++) {
                            arr[6] = f;
                            for (let g = 1; g < 9; g++) {
                                arr[7] = g;
                                for (let h = 1; h < 9; h++) {
                                    arr[8] = h;
                                    if (HorizontalCheck(arr) && DiagonalCheck(arr)) {
                                        arr[0] = x;
                                        result[x - 1] = [];
                                        arr.map(item => {
                                            result[x - 1].push(item);
                                        })
                                        x++;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return result;
}

function setup() {
    createCanvas(560, 560);
    toggleVariant();
}

function draw() {
    let width = window.width;
    let height = window.height;
    let side = Math.min(width, height) / 8;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] == 2)
                fill("red");
            else
                board[i][j] ? fill("black") : fill("white");

            rect(i * side, j * side, side);
        }
    }

    variant <= 1 ? prevBtn.className = "inActive" : prevBtn.className = "active";
    variant >= 92 ? nextBtn.className = "inActive" : nextBtn.className = "active";
}

function Previous() {
    if (variant > 1) {
        variant--;
        text.innerText = `Variant : ${variant}`;
        toggleVariant();
    }
}

function Next() {
    if (variant < 92) {
        variant++;
        text.innerText = `Variant : ${variant}`;
        toggleVariant();
    }
}

function toggleVariant() {
    letters.map((item, index) => {
        info.children[index].innerText = `${item} ${places[variant - 1][index + 1]}`;
    });

    for (let i = 7; i >= 0; i--) {
        board[i] = [];
        for (let j = 0; j < 8; j++) {
            if (places[variant - 1][i + 1] == 8 - j)
                board[i].push(2);
            else
                (i + j) % 2 == 0 ? board[i].push(0) : board[i].push(1);
        }
    }
}