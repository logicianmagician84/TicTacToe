

function startGame() {
    const gameBoard = Array(9).fill(null)
    let isXTurn = true
    let currentPiece = 'X'
    let isFilled = false
    let isWinner = false
    let numMoves = 0
    const boxes = Array.from(document.querySelectorAll('td'))
    boxes.forEach((box, i) => {
        box.addEventListener('click', makeMove)
        box.id = i
    })
    const winningCombo = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 5, 8], [2, 4, 6]]


    function makeMove(e) {
        if (isWinner) return
        if (e.target.textContent) return
        numMoves++
        let id = e.target.id
        gameBoard[id] = currentPiece
        e.target.textContent = currentPiece
        isFilled = gameBoard.every(box => { return box != null })
        currentPiece = isXTurn ? 'Y' : 'X'
        isXTurn = !isXTurn
        if (numMoves >= 5) return checkWinner()
    }
    function checkWinner() {
        winningCombo.forEach((combo) => {
            winLogic(combo)
        })
    }
    function winLogic(arr) {
        if (
            gameBoard[arr[0]] === 'X' && 
            gameBoard[arr[1]] === 'X' &&
            gameBoard[arr[2]] === 'X') {
            isWinner = true
            console.log('X Wins')
            return
        } else if (
            gameBoard[arr[0]] === 'Y' &&
            gameBoard[arr[1]] === 'Y' &&
            gameBoard[arr[2]] === 'Y'
        ) {
            isWinner = true
            console.log('Y Wins')
            return
        } else if (isFilled && !isWinner) {
            console.log('draw')
            return
        }
    }
}



startGame()
