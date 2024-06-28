<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Personal Portfolio Website 2022</title>
	<link rel="stylesheet" type="text/css" href="./Assets/Css/index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet"  href="https://unpkg.com/boxicons@latest/css/boxicons.min.css">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

</head>
<body>
	<header class="sticky">
		<a href="#" class="logo"><img src=""></a>

		<ul class="navlist">
			<li><a href="#home">Home</a></li>
			<li><a href="#cv">CV</a></li>
			<li><a href="#certificates">Opleidingen & Werk</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>
		<!--<a href="./logout.php" class="top-btn">Logout</a>-->
	</header>

	<section class="home" id="home">
		<div class="home-text">
			<?php echo "<h1>Welkom <span>" . $_SESSION['username'] . "</span></h1>"; ?>
			<h5>Hier kan je meer vinden van mijn CV.</h5>
			<p> <br> </p>
		</div>

		<div class="home-img">
			<img src="">
		</div>
	</section>

	<section id="cv">
		<div>
			<iframe src="./cv/index.html" frameborder="0" scrolling="no" style=" width: 850px; height: 1320px;  overflow: hidden;" ></iframe>
		</div>
		
		<div>
			<a href="#" class="cv-btn">CV opvragen</a>
		</div>
	</section>

    <section class="certificates" id="certificates">
		<div class="heading">
			<h3>Opleidingen, Werk & Stage</h3>
			<h2></h2>
			<br>
		</div>

		<div class="certificates-content">
			<div class="row">
				<div class="s s-one">
					
				</div>
				<h3>Medewerker Verkoop | Wildkamp Emmeloord</h3>
				<h5>2019 - Heden</h5>
				<p></p>
			</div>

			<div class="row">
				<div class="s s-tow">
					
				</div>
				<h3>Opleidingen Elektrotechniek | Roc Friesepoort</h3>
				<h5>2019 - 2021</h5>
				<p></p>
			</div>

			<div class="row">
				<div class="s s-three">
					
				</div>
				<h3>Stage | Wierda ProjectTechniek</h3>
				<h5>2019 - 2021</h5>
				<p></p>
			</div>

			<div class="row">
				<div class="s s-four">
					
				</div>
				<h3>Opleidingen Informatietechnologie | Roc Friesepoort</h3>
				<h5>2021 - Heden</h5>
				<p></p>
			</div>

			<div class="row">
				<div class="s s-four">
					
				</div>
				<h3>Stage | Acf Bendveld Emmloord</h3>
				<h5>2022 - 2023</h5>
				<p></p>
			</div>

		</div>
	</section>

	

	<section class="contact" id="contact">
		<div class="container">
			<div class="center">
				<h3>Wil je meer weten? Zoek dan contact met mij.</h3>
				<br>
			</div>

			<div class="action">
				<form>
					<a class="mailto" href="mailto:email@example.com">Send Email</a>
				</form>
			</div>
		</div>
	</section>
</body>
</html>