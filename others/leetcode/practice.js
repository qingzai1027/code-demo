/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 var largestLocal = function(grid) {
    let n = grid.length, g = grid, m = -Infinity, ans = [];
      for(let i = 0; i < n; i++) {
        let cur = [];
        for(let j = 0; j <= n - 3;) {
          let idx = 3;
          m = g[i][j];
          while(idx > 0) {
            m = Math.max(g[i][j], m);
            idx--;
            j++;
          }
          cur.push(m);
          j = j - 3 + 1;
        }
        ans.push(cur);
      }
      let a = ans[0].length, mm = -Infinity, res = [];
      for(let j = 0; j <= n - 3;) {
        let cur = [];
        for(let i = 0; i < a; i++) {
          let id = 3;
          mm = ans[j][i];
          while(id > 0) {
            mm = Math.max(ans[j][i], mm);
            id--;
            j++;
          }
          cur.push(mm);
          j = j - 3;
        }
        j = j + 1;
        res.push(cur)
      }
      return res;
    
    };