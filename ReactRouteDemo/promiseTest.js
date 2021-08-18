

// new Promise(
//     (resolve,)=>{
//         let a = "789"
//         setTimeout(()=>{
//             console.log("1")
//             a=a+1
//             resolve(a)
//         },1000)
//         console.log("3")
//     }
// ).then((res)=>{

//     console.log("2",res)

// })
// function cutUp(){
//     console.log('开始切菜。');
//     var p = new Promise(function(resolve, reject){        //做一些异步操作
//         setTimeout(function(){
//             console.log('切菜完毕！');
//             resolve('切好的菜');
//         }, 1000);
//     });
//     return p;
// }

// //烧水
// function boil(){
//     console.log('开始烧水。');
//     var p = new Promise(function(resolve, reject){        //做一些异步操作
//         setTimeout(function(){
//             console.log('烧水完毕！');
//             resolve('烧好的水');
//         }, 1000);
//     });
//     return p;
// }

// Promise.all([cutUp(), boil()]).then((result) => {
//         console.log('准备工作完毕');
//         console.log(result);
//     })


let arr= [2,1,3,4]

// arr.forEach((e)=>{
//     console.log(e)
// })

// arr.splice(1,3,"abc")
// arr.join(",")
// console.log(arr.sort((a,b)=>{
//     console.log(Math.random())
//     return 0
// }))

// ------------------------------------------------------------------------Promise/event loop

// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)

// new Promise((resolve) => {
//   console.log('promise')
//   resolve()
// })
//   .then(() => {
//     console.log('then1')
//   })
//   .then(() => {
//     console.log('then2')
//   })

// console.log('end')

// Promise.resolve().then(()=>{
//     console.log('Promise1')  
//     setTimeout(()=>{
//       console.log('setTimeout2')
//     },0)
//   })
  
//   setTimeout(()=>{
//     console.log('setTimeout1')
//     Promise.resolve().then(()=>{
//       console.log('Promise2')    
//     })
//   },0)
  
// ---------------------------------------------------------------------------------DFS/BFS
//   const root = [
//     {
//       id: '1',
//       children: [
//         {
//           id: '1-1',
//           children: [{ id: '1-1-1' }, { id: '1-1-2' }],
//         },
//         {
//           id: '1-2',
//           children: [{ id: '1-2-1' }, { id: '1-2-2' }],
//         },
//       ],
//     },
//     {
//       id: '2',
//       children: [
//         {
//           id: '2-1',
//           children: [{ id: '2-1-1' }, { id: '2-1-2' }],
//         },
//         {
//           id: '2-2',
//           children: [{ id: '2-2-1' }, { id: '2-2-2' }],
//         },
//       ],
//     },
//     {
//       id: '3',
//       children: [
//         {
//           id: '3-1',
//           children: [{ id: '3-1-1' }, { id: '3-1-2' }],
//         },
//         {
//           id: '3-2',
//           children: [{ id: '3-2-1' }, { id: '3-2-2' }],
//         },
//       ],
//     },
//   ];
  
//   const target = '2-2-2';
//   const depthFirstSearchWithRecursive = source => {
//     const result = []; // 存放结果的数组
//     // 递归方法
//     const dfs = data => {
//       // 遍历数组
//       data.forEach(element => {
//         // 将当前节点 id 存放进结果
//         result.push(element.id);
//         // 如果当前节点有子节点，则递归调用
//         if (element.children && element.children.length > 0) {
//           dfs(element.children);
//         }
//       });
//     };
//     // 开始搜索
//     dfs(source);
//     return console.log("result",result);
//   };

//   depthFirstSearchWithRecursive(root)



// --------------------------------------------------------------------------防抖/节流

function outer(params) {
    let timer
    function name() {
        if (timer) {
            console.log("timer")
        }else{
            timer = setTimeout(() => {
                console.log("aaa")
            })
        }
    }
    name()
}



