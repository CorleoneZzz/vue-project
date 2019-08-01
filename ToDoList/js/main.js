;(function () {
    new Vue({
        el: "#main",
        data:
            {
                currentInput: {},
                list: []
            },
        methods:
            {
                add() {
                    let title = this.currentInput.title;
                    if (title || title === 0) {
                        this.list.push(title);
                        console.log(this.list)
                    }
                },
                update() {

                },
                remove(id) {
                    this.list.splice(id, 1);
                }
            }
    });
})();