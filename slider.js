// Slide horizontal dengan jQuery
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var targetSection = $($(this).attr('href'));

    // Menghitung index bagian yang dituju
    var targetIndex = targetSection.index();

    // Menggeser slider untuk menampilkan bagian yang dituju
    $('.slider').css({
        'transform': 'translateX(' + (-targetIndex * 100) + '%)'
    });
});

