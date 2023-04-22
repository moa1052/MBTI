import { results, mbtis } from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
//results[mbtis.infp]
//results[mbtis['infp']]
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = lectureEl.querySelector('img')

titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach (function (boxEl, index){
    boxEl.innerHTML = result.results[index]
})
jobEls.forEach (function (jobEl, index){
    jobEl.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg


