function toggleBlock() {
    const title = document.querySelector('.instruct-block__btn');
    const content = document.querySelector('.instruct-block__cards');
    const arrow = document.querySelector('.instruct-block__icon');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
}

let formBtn = document.querySelector('.form-block__btn')
let modal = document.querySelector('.modal')
let exit = document.querySelector('.modal-block__head')
let myForm = document.querySelector('.form-block')

if (formBtn) {
  formBtn.addEventListener('click', function () {
    if (!formBtn.classList.contains('disabled')) {
    modal.classList.add('active')
    document.body.style.overflow = "hidden"
    let name = document.getElementById('name').value
    console.log(name)
    myForm.reset();
    }
  })
}

if (exit) {
  exit.addEventListener('click', function () {
    modal.classList.remove('active')
    document.body.style.overflow = "visible"
    location.reload()
  })
}



const accordionItems = document.querySelectorAll('.links-block__item');

accordionItems.forEach((item) => {
    const header = item.querySelector('.links-block__switch');
    const content = item.querySelector('.links-block__content');
    const arrow = item.querySelector('.links-block__arrow');

    header.addEventListener('click', () => {
        content.classList.toggle('show');
        arrow.style.transform = content.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
    });
});


$(document).ready(function () {
    $("#cphone").mask("+7 (000) 000-00-00");
})
$.validator.addMethod("pwcheckallowedchars", function (value) {
    return /^[a-zA-Zа-яА-я-()ёЁ ]+$/.test(value)
}, "Недопустимое значение");
$('.form-block').validate({
    rules: {
        cname: {
            required: true,
            minlength: 2,
            pwcheckallowedchars: true
        },
        cemail: {
            required: true,
            email: true
        },
        cphone: {
            required: true,
            minlength: 18
        },
        area: {
            required: true,
        }
    },
    messages: {
        cname: {
            required: 'Поле не заполнено',
            minlength: 'Минимум 2 символа'
        },
        cemail: {
            required: 'Поле не заполнено',
            email: 'Введите правильный email'
        },
        cphone: {
            required: 'Поле не заполнено',
            minlength: 'Введите номер до конца'
        },
        area: {
            required: 'Поле не заполнено',
            minlength: 'Минимум 10 символов',
            maxlength: 'Максимум 100 символов'
        }
    },
    onkeyup: function (element) {
        let submit = document.querySelector('#form-block .form-block__btn')

        if ($('#form-block').validate().checkForm()) {
            submit.classList.remove('disabled')
        } else {
            submit.classList.add('disabled')
        }
        var excludedKeys = [
            16, 17, 18, 20, 35, 36, 37,
            38, 39, 40, 45, 144, 225
        ];
        if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
            return;
        } else if (element.name in this.submitted || element.name in this.invalid) {
            this.element(element);
        }
    },
})
