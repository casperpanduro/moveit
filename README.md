# moveit
```html
<!-- HTML -->
<section>
	<div class="container">
		<h1 class="moveit">moveit.js is <br>an awesome <br>jquery plugin</h1>
		<h2 class="subline">GET IT</h2>
	</div>
</section>

<!-- JQUERY -->
<script src="moveit.js"></script>
<script>
	$(document).ready(function(){
		$(".moveit").moveit({
			sensitivity: 10,
			rotate: false,
			rotateSensitivity: 30
		});
	});
</script>
