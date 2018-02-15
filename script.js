var movies = [
	{
		id: 1,
		title: 'Harry Potter',
	    desc: 'Movie about sorcerer',
	    poster: 'http://ecsmedia.pl/c/harry-potter-i-komnata-tajemnic-b-iext40707688.jpg'
	},
	{
	    id: 2,
	    title: 'Lion King',
	    desc: 'Movie about king of savannah',
	    poster: 'http://is1.mzstatic.com/image/thumb/Video30/v4/83/a8/ca/83a8ca3b-4d38-64ec-a789-005ea973af54/source/227x227bb.jpg' 
	},
	{
		id: 3,
		title: 'Blade Runner',
		desc: 'Movie about replicants',
		poster: 'https://images.bigcartel.com/product_images/160141942/bladerunner1b.jpg?auto=format&fit=max&h=1000&w=1000'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title), 
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster, width: '200px'})
		);
});

var element =
	React.createElement('div', {},
		React.createElement('h1', {}, 'Movie list'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));