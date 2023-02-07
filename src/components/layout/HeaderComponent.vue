<template>
	<header>
		<nav class="navbar">
			<div class="container">
					<img
						src="../../assets/logo.svg"
						width="60"
						height="60"
						class="d-inline-block align-center"
						alt=""
                      />
      </div>

      <div class="format__header">
        <h1 class="text-center">Doggy Gallery</h1>
      </div>

		</nav>
	</header>
</template>

<style>
	.navbar-brand {
		display: block;
		width: 100%;
		text-align: center;
	}

  .navbar {
    background-color: #150ab9;
    margin-top: 0;
    height: 6rem;
  }

  .navbar {
    background-color: #07024b;
    margin-top: 0;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3rem;
  }

  .format__header {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  h1.text-center {
    color: #ab5454;
    font-size: 2.5rem;
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 0;


  }

	@media screen and (min-width: 700px) {
		.navbar-brand {
			text-align: left;
		}
	}
</style>

<script>
	export default {
		name: 'HeaderComponent',
	};
</script>
