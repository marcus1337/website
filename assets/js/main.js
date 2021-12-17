/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function () {
	var $body = document.querySelector('body');
	window.addEventListener('load', function () {
		window.setTimeout(function () {
			$body.classList.remove('is-preload');
		}, 100);
	});

	(function () {
		var settings = {
			images: {
				'images/bg01.jpg': 'center',
				'images/bg02.jpg': 'center',
				'images/bg03.jpg': 'center',
			},
			delay: 50000
		};

		var pos = 0, lastPos = 0,
			$wrapper, $bgs = [], $bg,
			k;

		$wrapper = document.createElement('div');
		$wrapper.id = 'bg';
		$body.appendChild($wrapper);

		for (k in settings.images) {
			$bg = document.createElement('div');
			$bg.style.backgroundImage = 'url("' + k + '")';
			$bg.style.backgroundPosition = settings.images[k];
			$wrapper.appendChild($bg);
			$bgs.push($bg);
		}

		$bgs[pos].classList.add('visible');
		$bgs[pos].classList.add('top');

		if ($bgs.length == 1)
			return;

		window.setInterval(function () {
			lastPos = pos;
			pos++;
			if (pos >= $bgs.length)
				pos = 0;
			$bgs[lastPos].classList.remove('top');
			$bgs[pos].classList.add('visible');
			$bgs[pos].classList.add('top');
			window.setTimeout(function () {
				$bgs[lastPos].classList.remove('visible');
			}, settings.delay / 2);
		}, settings.delay);
	})();
})();