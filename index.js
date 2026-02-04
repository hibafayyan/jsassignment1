var weather =prompt(
    `choose any one weather
    1.Snowy
    2.Sunny
    3.Thunderstorm
    4.Rainy
    5.Windy
    6.Cloudy
    `
).toLowerCase();

if (weather === "sunny"){
 document.writeln(`
      <div class="container-lg d-flex justify-content-center align-items-center summer ">
        <div class="card animate__animated animate__fadeInDown" style="width: 18rem;">
            <img src="https://www.shutterstock.com/image-vector/summer-banner-template-tropical-beach-260nw-2634197153.jpg"
                class="card-img-top" alt="...">
            <div class="card-body ">
                <h5 class="card-title">Sunshine & Smiles," "Hello Summer".</h5>
                <p class="card-text">Enjoy the summer vibes with bright days and cool moments.</p>
                <a href="#" class="btn btn-primary border-0">Explore</a>
            </div>
        </div>
    `)
} else if (weather === "snowy"){
 document.writeln(`
      <div class="container-lg d-flex justify-content-center align-items-center snowy">
        <div class="card animate__animated animate__fadeInDown" style="width: 18rem;">
            <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/cute-snowman-free-image.jpeg?w=600&quality=80"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Winter Wonderland ❄️</h5>
                <p class="card-text"> Fluffy snow is falling, covering everything in white. Perfect day for hot cocoa!.</p>
                <a href="#" class="btn btn-primary border-0">Explore</a>
            </div>
        </div>
    `)} 

    else if (weather === "thunderstorm"){
 document.writeln(`
      <div class="container-lg d-flex justify-content-center align-items-center Thunderstorm">
        <div class="card animate__animated animate__fadeInDown" style="width: 18rem;">
            <img src="https://static.vecteezy.com/system/resources/previews/000/211/334/non_2x/vector-seamless-rain-theme-card-cute-greeting-card-and-sample-text.jpg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Whispers of the Storm</h5>
                <p class="card-text">  Lightning dances across the sky as thunder rolls, reminding us of nature’s raw power and beauty.</p>
                <a href="#" class="btn btn-primary border-0">Explore</a>
            </div>
        </div>
    `)} else if (weather === "cloudy"){
 document.writeln(`
      <div class="container-lg d-flex justify-content-center align-items-center cloudy">
        <div class="card animate__animated animate__fadeInDown" style="width: 18rem;">
            <img src="https://thumbs.dreamstime.com/z/cloudy-card-cute-cartoon-clouds-childrens-cards-learning-weather-elements-vector-illustration-271864018.jpg?ct=jpeg"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Cloudy Days</h5>
                <p class="card-text"> No rush, no fuss. Just clouds overhead and time stretching out like a soft blanket.</p>
                <a href="#" class="btn btn-primary border-0">Explore</a>
            </div>
        </div>
    `)} else if (weather === "windy"){
 document.writeln(`
      <div class="container-lg d-flex justify-content-center align-items-center windy">
        <div class="card animate__animated animate__fadeInDown" style="width: 18rem;">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVKpdlGOl1kCqA_HAP3gh5Vj7M-CcIPFRvg&s"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Air in Motion</h5>
                <p class="card-text"> The wind dances around, light and playful, reminding you that change is always in motion.</p>
                <a href="#" class="btn btn-primary border-0">Explore</a>
            </div>
        </div>
    `)} 
