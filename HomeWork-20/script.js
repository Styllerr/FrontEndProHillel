$(document).ready(function () {

    class Object {
        constructor(name) {
            this.name = name
            this.img = document.createElement('img')
            this.img.src = `img/${name}.png`
            this.img.id = name
            this.wrapper = document.querySelector('.wrapper')
            this.wrapper.append(this.img)
        }
    }
    const batman = new Object('batman');
    const joker = new Object('joker');
    $('#batman').css('position', 'absolute').css('left', '0').css('top', '10px');
    $('#joker').css('position', 'absolute').css('right', '0').css('top', '65px');
    $(document).keydown(function (key) {
        let batX = $('#batman').position().left;
        let jokX = $('#joker').position().left;
        let timeBoom = jokX - batX;
        if (timeBoom > 253) {
            switch (parseInt(key.which)) {
                case 68:
                    $('#batman').animate({
                        left: '+=150px'
                    }, 'slow');
                    break;
                case 65:
                    if (batX > 149) {
                        $('#batman').animate({
                            left: '-=150px'
                        }, 'slow');
                    }
                    break;
                case 37:
                    $('#joker').animate({
                        right: '+=150px'
                    }, 'slow');
                    break;
                case 39:
                    $('#joker').animate({
                        right: '-=150px'
                    }, 'slow');
                    break;

                default:
                    break;
            }
            if (timeBoom < 355) {
                const bang = new Object('bang');
                $('#bang').css('width', '200px').css('height', '200px');
                $('#bang').css('position', 'absolute').css('zindex', '2').css('left', `${jokX - 172}px`).css('top', '0');
                $('#batman').animate({
                    opacity: '0'
                }, 'slow');
                $('#bang').animate({
                    opacity: '0'
                }, 4000);
            }
        }
    })
})