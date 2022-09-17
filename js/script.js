let days = new Date(document.lastModified);
let date = document.getElementById('date');
date.innerHTML = `${days.getDate()} ${days.getMonth() + 1} ${days.getFullYear()}`;
const topNav = ["Game", "Opinion", "Arts", "Glitz", "Lifestyle", "Tech"];
const topNavbar = document.getElementById('top-navbar');
topNav.forEach(e => {
	let li = document.createElement('li');
	li.classList.add('mx-4')
	li.innerHTML = `<a href="#" class="text-gray-500 hover:text-black">${e}</a>`;
	topNavbar.appendChild(li)
})

// main manu section 
const mainMenulist=["World","Entertainment","Lifestyle","Economy","Business","Cricket","Recent"]
const mainBarSection=document.getElementById('main-bar')
mainMenulist.forEach(e => {
	let li = document.createElement('li');
	li.classList.add('mx-4')
	li.innerHTML = `<a href="#" class="text-gray-500 hover:text-black">${e}</a>`;
	mainBarSection.appendChild(li)
})
const API_KEY = "5dc33e8a1cf942668657118b78ccd497";
// called data 
const loadData = async() => {
	try {
		const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
		const data = await res.json()
		displayTopNews(data.articles)
	}
	catch {
		console.log(error)
	}
}
loadData()
const displayNews = (newses, displayId) => {
	let displayContainer=document.createElement('div')
	newses.forEach(news => {
		const{title,description}=news
		const div = document.createElement('div');
		div.classList.add('mt-4')
		div.innerHTML = `
		<h1 class="text-2xl font-bold" >${title}</h1>
		<p class="text-xl text-gray-500">${(description.length>200)?description.slice(0,200):description}</p>
		`
		displayId.appendChild(div)
	})
}
const displayTopNews = (allNews) => {

	const topNews = [allNews[0]];
	const secondTopNews = allNews.slice(1, 3);
	const thirdTopNews = allNews.slice(3, 5)
	const topNewsLeft=document.getElementById('top-news-left')
	const topNewsCenter=document.getElementById('top-news-center')
	const topNewsRight = document.getElementById('top-news-right')
	topNews.forEach(e => {
		const { urlToImage, title, description } = e
		let div = document.createElement('div')
		div.classList.add('mt-6')
		div.innerHTML = `
		<img class="w-full" src="${urlToImage}" alt="">
		<h1 class="text-4xl font-bold my-6">${title}"</h1>
		<p class="text-2xl text-gray-500">${description}"</p>
		`
		topNewsCenter.appendChild(div)
	})
	displayNews(secondTopNews,topNewsLeft)
	displayNews(thirdTopNews, topNewsRight)
	curoselLoad(allNews)
	
}
// recent news section 
const loadData1 = async() => {
	try {
		const res = await fetch(`https://newsapi.org/v2/everything?q=bangladesh&from=2022-09-17&sortBy=recent&apiKey=${API_KEY}`)
		const data = await res.json()
		displayRecentNews(data.articles)
	}
	catch {
		console.log(error)
	}
}
const displayRecentNews = (allNews) => {
	const alllNewsSlice=allNews.slice(0,4)
	const recentNewsContainer = document.getElementById('recent-news');
	alllNewsSlice.forEach(news => {
		const {urlToImage,title,author}=news
		const div = document.createElement('div')
		div.innerHTML = `
			<img class="w-full h-48" src="${urlToImage? urlToImage:'No Photo'}" alt="">
			<h2 class="text-2xl my-4">${author? author:'No Author Name'}</h2>
			<hr>
			<h1 class="text-3xl font-semibold my-2">${title}</h1>
		`
		recentNewsContainer.appendChild(div)
	})

}
loadData1()
// curosel section
const curoselLoad = (allNews) => {
	console.log(allNews);
	const sportLigntImg = document.getElementById('sportLignt-img')
	const sportLigntHeader=document.getElementById('sportLignt-header')
	const sportLigntDetail=document.getElementById('sportLignt-detail')
	
	let spontsLigntNumber = 0;
	const spotsLigntNews = allNews.slice(0, 7);
	setInterval(()=>{
		if (spontsLigntNumber === 7) {
			spontsLigntNumber = 0;
		}
		const news = spotsLigntNews[spontsLigntNumber]
		sportLigntImg.setAttribute('src', news.urlToImage)
		sportLigntHeader.innerText = news.title;
		sportLigntDetail.innerText = news.description;
		console.log(news)
		spontsLigntNumber++;
	},5000)
	// const spotsLigntStore = [];
	// spotsLigntNews.forEach(news => {
	// 	const div = document.createElement('div');
	// 	div.innerHTML = `
	// 		<div class="grid grid-cols-2 gap-4">
	// 			<img class="w-full" src="" alt="">
	// 			<div>
	// 				<h1 class="text-4xl font-bold"></h1>
	// 				<p class="text-2xl text-gray-600"></p>
	// 			</div>
	// 		</div>
	// 	`
		
	// })
	
	
} 


