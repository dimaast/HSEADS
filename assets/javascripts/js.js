document.addEventListener('DOMContentLoaded', function () {
    let button = Object.values(document.querySelectorAll('.courses'));
    let allCourseCourses = Object.values(document.querySelectorAll('.courseAll'))
    let firstCourseCourses = Object.values(document.querySelectorAll('.course1st'));
    let secondCourseCourses = Object.values(document.querySelectorAll('.course2nd'));
    let thirdCourseCourses = Object.values(document.querySelectorAll('.course3rd'));
    let fourthCourseCourses = Object.values(document.querySelectorAll('.course4th'));

    let allCourseFilterButton = document.getElementById('courseall')
    let firstCourseFilterButton = document.getElementById('course1st')
    let secondCourseFilterButton = document.getElementById('course2nd')
    let thirdCourseFilterButton = document.getElementById('course3rd')
    let fourthCourseFilterButton = document.getElementById('course4th')

    let filterButtons = [allCourseFilterButton, firstCourseFilterButton, secondCourseFilterButton, thirdCourseFilterButton, fourthCourseFilterButton]

    if ((window.location.href.split('/').at(-1) == 'courses.html') || (window.location.href.split('/').at(-1) == 'deadlines.html')) {
        filterButtons.forEach(el => {
            el.addEventListener('click', function (e) {
                if (el == allCourseFilterButton) {
                    allCourseCourses.forEach (course => {
                        course.classList.remove("hidden")
                    })
                } else if (el == firstCourseFilterButton) {
                    firstCourseCourses.forEach (course => {
                        course.classList.remove("hidden")
                    })
                    secondCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    thirdCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    fourthCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                } else if (el == secondCourseFilterButton) {
                    firstCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    secondCourseCourses.forEach (course => {
                        course.classList.remove("hidden")
                    })
                    thirdCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    fourthCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                } else if (el == thirdCourseFilterButton) {
                    firstCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    secondCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    thirdCourseCourses.forEach (course => {
                        course.classList.remove("hidden")
                    })
                    fourthCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                } else if (el == fourthCourseFilterButton) {
                    firstCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    secondCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    thirdCourseCourses.forEach (course => {
                        course.classList.add("hidden")
                    })
                    fourthCourseCourses.forEach (course => {
                        course.classList.remove("hidden")
                    })
                }
            })
        })
    }

    button.forEach(element => {
        element.addEventListener('click', function() {
            let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        })
    })
})