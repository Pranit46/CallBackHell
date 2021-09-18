setTimeout ( function c10() {

    document.getElementById("count").innerHTML = 10

    setTimeout ( function c19() {
        document.getElementById("count").innerHTML = 9

        setTimeout ( function c8() {
            document.getElementById("count").innerHTML = 8

            setTimeout ( function c7() {
                document.getElementById("count").innerHTML = 7

                setTimeout ( function c6() {
                    document.getElementById("count").innerHTML = 6

                    setTimeout ( function c5() {
                        document.getElementById("count").innerHTML = 5

                        setTimeout ( function c4() {
                            document.getElementById("count").innerHTML = 4

                            setTimeout ( function c3() {
                                document.getElementById("count").innerHTML = 3

                                setTimeout ( function c2() {
                                    document.getElementById("count").innerHTML = 2

                                    setTimeout ( function c1() {
                                        document.getElementById("count").innerHTML = 1
                                    },1000)

                                },1000)

                            },1000)

                        },1000)

                    },1000)

                },1000)

            },1000)

        },1000)


    },1000)

}, 1000)