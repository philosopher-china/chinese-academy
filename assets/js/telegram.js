// ========================== Обработка отправки данных из формы обратной связи ================================

const BOT_TOKEN = '7028652154:AAFuJcekeL_3fgsw8rSB0BPEoH6-3dalR10'
const CHAT_ID = '@PhilosopherAcademy'
const API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`

async function sendMessage(event) {
    event.preventDefault();

    const form = event.target;
    const form_btn = document.querySelector("#contact-btn");

    const form_data = new FormData(form);
    const { name, email, message } = Object.fromEntries(form_data.entries());
    
    const text = `Заявка от пользователя ${name}\nE-mail: ${email}\nСообщение: ${message}`;

    try {
        form_btn.value = "Отправка";
        form_btn.disabled = true;

        // Запрос на отправку данных в Telegram
        const response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text
            })
        });
        form_btn.classList.toggle('btn');
        if (response.ok) {
            form_btn.classList.toggle('message-send-success');
            form_btn.value = "Спасибо";
        } else {
            form_btn.classList.toggle('message-send-error');
            form_btn.value = "Что-то не так";
        }
        form.reset();
    } catch (error) {
        form_btn.classList.toggle('message-send-error');
        form_btn.value = "Ошибка";
    } finally {
        setTimeout(function () {
            form_btn.classList.remove('message-send-error');
            form_btn.classList.remove('message-send-success');
            form_btn.classList.toggle('btn');
            form_btn.value = "Отправить сообщение"
            form_btn.disabled = false;
        }, 2000)
    }
}