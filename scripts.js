//***********************************************CALLBACK***********************************************************************
// const iWell = true;
// let money = 130;
//
// function myDay(iWell, cb) {
//     setTimeout(() => {
//         if(iWell) {
//             cb(null, 'I am OK!');
//         } else {
//             cb('i am not well');
//         }
//     }, 1000);
// }
//
// function wakeUp(ok, cb) {
//     setTimeout(() => {
//         if(ok) {
//             console.log();
//             cb(null, 'try to wake up')
//         } else {
//             cb('maybe next time');
//         }
//     }, 2000);
// }
//
// function goBreakfast(eat, cb) {
//     setTimeout(() => {
//         if(eat) {
//             cb(null, 'Eating');
//         } else {
//             cb('some went wrong');
//         }
//     }, 500);
// }
//
// function goToWork(money, cb) {
//     setTimeout(() => {
//         if(money > 100) {
//             money = money - 100;
//             console.log(`My money: ${money}`);
//             cb(null, 'Drr drr drr on buss');
//         } else {
//             cb('No money, run run!');
//         }
//     }, 2000);
// }
//
// function working(job, cb) {
//     setTimeout(() => {
//         if(job) {
//             money += 300;
//             console.log(`My money: ${money}`);
//             cb(null, 'working!!!');
//         } else {
//             cb('work or get out!');
//         }
//     }, 2000)
// }
//
// function goToHome(money, cb) {
//     setTimeout(() => {
//         if(money > 70) {
//             money -= 70;
//             console.log(`My money: ${money}`);
//             cb(null, 'Go to home');
//         } else {
//             console.log('Go away');
//         }
//     }, 1000)
// }
//
// function sleep(zzz, cb) {
//     setTimeout(() => {
//         if(zzz) {
//             cb(null, 'Sleeping');
//         } else {
//             cb('Can not sleep');
//         }
//     })
// }
//
// myDay(iWell, (err, ok) => {
//     if(!err) {
//         console.log(ok);
//
//         wakeUp(ok, (err, ready) => {
//             if(!err) {
//                 console.log(ready);
//
//                 goBreakfast(ready, (err, eat) => {
//                     if(!err) {
//                         console.log(eat);
//
//                         goToWork(money, (err, go) => {
//                             if(!err) {
//                                 console.log(go);
//
//                                 working(true, (err, work) => {
//                                     if(!err) {
//                                         console.log(work);
//
//                                         goToHome(money, (err, goAgain) => {
//                                            if(!err) {
//                                                console.log(goAgain);
//
//                                                sleep(true, (err, sleep) => {
//                                                    if(!err) {
//                                                        console.log(sleep);
//                                                    } else {
//                                                        console.log(err);
//                                                    }
//                                                })
//                                            } else {
//                                                console.log(err);
//                                            }
//                                         });
//                                     } else {
//                                         console.log(err);
//                                     }
//                                 })
//                             } else {
//                                 console.log(err);
//                             }
//                         })
//                     } else {
//                         console.log(err);
//                     }
//                 });
//             } else {
//                 console.log(err);
//             }
//         });
//     } else {
//         console.log(err);
//     }
// });
//***********************************************PROMISE**************************************************************
// const iWell = true;
// let money = 130;
//
// function myDay(iWell) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(iWell) {
//                 res( 'I am OK!');
//             } else {
//                 rej('i am not well');
//             }
//         }, 1000);
//     })
// }
//
// function wakeUp(iWell) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(iWell) {
//                 console.log();
//                 res( 'try to wake up')
//             } else {
//                 rej('maybe next time');
//             }
//         }, 2000);
//     })
// }
//
// function goBreakfast(eat) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(eat) {
//                 res( 'Eating');
//             } else {
//                 rej('some went wrong');
//             }
//         }, 500);
//     })
// }
//
// function goToWork(money) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(money > 100) {
//                 money = money - 100;
//                 console.log(`My money: ${money}`);
//                 res( 'Drr drr drr on buss');
//             } else {
//                 rej('No money, run run!');
//             }
//         }, 2000);
//     })
// }
//
// function working(job) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(job) {
//                 money += 300;
//                 console.log(`My money: ${money}`);
//                 res( 'working!!!');
//             } else {
//                 rej('work or get out!');
//             }
//         }, 2000)
//     })
// }
//
// function goToHome(money) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(money > 70) {
//                 money -= 70;
//                 console.log(`My money: ${money}`);
//                 res( 'Go to home');
//             } else {
//                 rej('Go away');
//             }
//         }, 1000)
//     })
// }
//
// function sleep(zzz) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(zzz) {
//                 res( 'Sleeping');
//             } else {
//                 rej('Can not sleep');
//             }
//         }, 500)
//     })
// }
//
// myDay(iWell)
//     .then(well => {
//         console.log(well);
//         return wakeUp(well);
//     })
//     .then(ok => {
//         console.log(ok);
//         return goBreakfast(ok)
//     })
//     .then(eat => {
//         console.log(eat);
//         return goToWork(money);
//     })
//     .then(money => {
//         console.log(money);
//         return working(true)
//     })
//     .then(job => {
//         console.log(job);
//         return goToHome(money)
//     })
//     .then(money => {
//         console.log(money);
//         return sleep(true)
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log('good day');
//     });
//******************************************ASYNC_AWAIT*******************************************************************
// const iWell = true;
// let money = 130;
//
// function myDay(iWell) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(iWell) {
//                 res( 'I am OK!');
//             } else {
//                 rej('i am not well');
//             }
//         }, 1000);
//     })
// }
//
// function wakeUp(iWell) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(iWell) {
//                 console.log();
//                 res( 'try to wake up')
//             } else {
//                 rej('maybe next time');
//             }
//         }, 2000);
//     })
// }
//
// function goBreakfast(eat) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(eat) {
//                 res( 'Eating');
//             } else {
//                 rej('some went wrong');
//             }
//         }, 500);
//     })
// }
//
// function goToWork(money) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(money > 100) {
//                 money = money - 100;
//                 console.log(`My money: ${money}`);
//                 res( 'Drr drr drr on buss');
//             } else {
//                 rej('No money, run run!');
//             }
//         }, 2000);
//     })
// }
//
// function working(job) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(job) {
//                 money += 300;
//                 console.log(`My money: ${money}`);
//                 res( 'working!!!');
//             } else {
//                 rej('work or get out!');
//             }
//         }, 2000)
//     })
// }
//
// function goToHome(money) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(money > 70) {
//                 money -= 70;
//                 console.log(`My money: ${money}`);
//                 res( 'Go to home');
//             } else {
//                 rej('Go away');
//             }
//         }, 1000)
//     })
// }
//
// function sleep(zzz) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(zzz) {
//                 res( 'Sleeping');
//             } else {
//                 rej('Can not sleep');
//             }
//         }, 500)
//     })
// }
//
// async function myFullDay() {
//     let isWell = await myDay(iWell);
//     console.log(isWell);
//
//     let isOk = await wakeUp(isWell);
//     console.log(isOk);
//
//     let eat = await goBreakfast(true);
//     console.log(eat);
//
//     let goWork = await goToWork(money);
//     console.log(goWork);
//
//     let work = await working(true);
//     console.log(work);
//
//     let goHome = await goToHome(money);
//     console.log(goHome);
//
//     let letsSleep = await sleep(true);
//     console.log(letsSleep);
// }
//
// myFullDay();