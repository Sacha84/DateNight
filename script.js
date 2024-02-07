function spinWheels() {
    let wheels = document.querySelectorAll('.wheel');
    wheels.forEach(wheel => {
        let randomRotation = Math.floor(Math.random() * 3600) + 3600; // Random rotation between 3600 and 7200 degrees
        wheel.style.transitionDuration = '5s'; // Adjust the duration of the spinning animation here
        wheel.style.transform = `rotate(${randomRotation}deg)`;
        setTimeout(() => {
            resetWheel(wheel);
        }, 5000); // Adjust this timeout to match the transition duration above
    });
}

function resetWheel(wheel) {
    wheel.style.transitionDuration = '0s';
    wheel.style.transform = 'rotate(0deg)';
}
