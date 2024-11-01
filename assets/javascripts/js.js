document.addEventListener('DOMContentLoaded', function () {
    var button = Object.values(document.querySelectorAll('.courses'));

    let allCourseFilterButton = document.getElementById('courseall')
    let firstCourseFilterButton = document.getElementById('course1st')
    let secondCourseFilterButton = document.getElementById('course2nd')
    let thirdCourseFilterButton = document.getElementById('course3rd')
    let fourthCourseFilterButton = document.getElementById('course4th')

    let filterButtons = [allCourseFilterButton, firstCourseFilterButton, secondCourseFilterButton, thirdCourseFilterButton, fourthCourseFilterButton]
    
    filterButtons.forEach(el => {
        el.addEventListener('click', function (e) {
            console.log(`Вы кликнули на кнопку ${el.textContent}`)
        })
    })

    button.forEach(element => {
        element.addEventListener('click', function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    })
})