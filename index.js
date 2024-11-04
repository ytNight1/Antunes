$(document).ready(function() {
    // Validação de formulário
    $('#formContato').submit(function(event) {
        event.preventDefault();
        let nome = $('#nome').val();
        let email = $('#email').val();
        let mensagem = $('#mensagem').val();
        
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        alert('Mensagem enviada com sucesso!');
        $(this).trigger('reset');
    });

    // Animação ao rolar
    $(window).scroll(function() {
        $('section').each(function() {
            let top_of_element = $(this).offset().top;
            let bottom_of_element = $(this).offset().top + $(this).outerHeight();
            let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            let top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                $(this).addClass('fade-in');
            }
        });
    });

    // Modal da galeria
    $('.galeria-grid img').click(function() {
        $('#modal').css('display', 'block');
        $('#modal-img').attr('src', $(this).attr('src'));
        $('#caption').text($(this).attr('alt'));
    });

    $('.close').click(function() {
        $('#modal').css('display', 'none');
    });

    $(window).click(function(event) {
        if ($(event.target).is('#modal')) {
            $('#modal').css('display', 'none');
        }
    });
});

$(document).ready(function() {
    // (Código anterior...)

    // Inscrição na Newsletter
    $('#formNewsletter').submit(function(event) {
        event.preventDefault();
        let emailNewsletter = $('#emailNewsletter').val();
        alert(`Inscrito com sucesso: ${emailNewsletter}`);
        $(this).trigger('reset');
    });
});

// Contagem de caracteres
$('#mensagem').on('input', function() {
    let contagem = $(this).val().length;
    $('#contadorMensagem').text(`${contagem}/500 caracteres`);
});

// Scroll suave para links de navegação internos
$('.scroll-link').click(function(event) {
    event.preventDefault();
    let alvo = $($(this).attr('href')).offset().top;
    $('html, body').animate({
        scrollTop: alvo
    }, 800);
});

// Exibir mensagem de sucesso ao inscrever-se na Newsletter
$('#formNewsletter').submit(function(event) {
    event.preventDefault();
    let emailNewsletter = $('#emailNewsletter').val();
    $('#feedbackNewsletter').text(`Inscrito com sucesso: ${emailNewsletter}`);
    $('#feedbackNewsletter').fadeIn().delay(3000).fadeOut();
    $(this).trigger('reset');
});

// Exibir botão de Voltar ao Topo ao rolar a página
$(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        $('#backToTop').fadeIn();
    } else {
        $('#backToTop').fadeOut();
    }
});

// Rolar suavemente para o topo
$('#backToTop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
});

// Alternar entre tema claro e escuro
$('#toggleTheme').click(function() {
    $('body').toggleClass('dark-mode');
    $(this).text($('body').hasClass('dark-mode') ? '☀️ Mudar para Claro' : '🌙 Mudar para Escuro');
});

// Carrossel de Imagens
let currentSlide = 0;
const slides = $('#carrosselGaleria img');
const totalSlides = slides.length;

$('#next').click(function() {
    slides.eq(currentSlide).hide();
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.eq(currentSlide).show();
});

$('#prev').click(function() {
    slides.eq(currentSlide).hide();
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.eq(currentSlide).show();
});

// Atualizar barra de progresso ao rolar
$(window).scroll(function() {
    const scrollTop = $(this).scrollTop();
    const documentHeight = $(document).height() - $(window).height();
    const scrollPercent = (scrollTop / documentHeight) * 100;
    $('#progressBar').css('width', scrollPercent + '%');
});

// Atualizar status de horário de funcionamento
function verificarHorarioFuncionamento() {
    const agora = new Date();
    const hora = agora.getHours();
    const diaSemana = agora.getDay();
    const aberto = (diaSemana >= 1 && diaSemana <= 5) && (hora >= 9 && hora <= 18);

    $('#horarioFuncionamento').toggleClass('aberto', aberto);
    $('#horarioFuncionamento').text(`Horário: ${aberto ? 'Aberto' : 'Fechado'}`);
}

setInterval(verificarHorarioFuncionamento, 60000); // Atualizar a cada minuto
verificarHorarioFuncionamento(); // Verificar ao carregar a página
// Mostrar pop-up de boas-vindas por alguns segundos
$(document).ready(function() {
    $('#popupBemVindo').addClass('show');
    setTimeout(function() {
        $('#popupBemVindo').removeClass('show');
    }, 3000);
});

// Validação em tempo real do campo de email
$('#email').on('input', function() {
    const email = $(this).val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailRegex.test(email)) {
        $(this).css('border-color', 'green');
    } else {
        $(this).css('border-color', 'red');
    }
});

// Notificação de cookies
$(document).ready(function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        $('#cookieNotice').fadeIn();
    }

    $('#acceptCookies').click(function() {
        localStorage.setItem('cookiesAccepted', 'true');
        $('#cookieNotice').fadeOut();
    });
});

// Filtragem de conteúdo de busca
$('#searchInput').on('input', function() {
    const query = $(this).val().toLowerCase();
    $('.search-item').each(function() {
        const item = $(this).text().toLowerCase();
        $(this).toggle(item.includes(query));
    });
});
// Compartilhamento em redes sociais
const urlAtual = window.location.href;

$('#shareFacebook').click(function() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlAtual)}`, '_blank');
});

$('#shareTwitter').click(function() {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(urlAtual)}`, '_blank');
});

// Tornar o menu fixo com mudança de cor ao rolar
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
});
