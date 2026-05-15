
function isPotisitionToDot()

function diamonds(l, c, s) {
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < c; j++) {
        if(isPotisitionToDot(i, j, l, c, s)) {
            console.log('.');
        } else if(isPotisitionToSlash(i, j, l, c, s)) {
            console.log('/');
        } else {
            console.log('\\');
        }
    }
  }
}

diamonds(3, 1, 2);
