new Vue(
    {
        el: '.bag',
        data:
            {
                health: 100,
                ended: false

            },
        methods:
            {
                shake() {
                    this.health -= 10;
                    if (this.health === 0) {
                        this.ended = true;

                    }
                },
                restart() {
                    this.health = 100;
                    this.ended = false;
                }
            },
        computed:
            {}
    });