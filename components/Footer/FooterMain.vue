<template>
    <footer class="footer-thirds-4-3-4">
        <div class="mainWidth flex wrap justifyCenter">
            <div class="leftBox">
                <FooterLeftBox />
            </div>

            <div class="centerBox ">
                <FooterCenterBox />
            </div>

            <div class="rightBox">
                <FooterRightBox />
            </div>
        </div>


        <FooterNavBar />

    </footer>
</template>

<style scoped>
footer {
    min-height: 100vh;
}
footer .mainWidth {
    padding: 50px 20px ;
}
footer .mainWidth div {
    margin-top: 50px;
    flex-grow: 1;
    /* outline: 1px solid red; */
}
.footer-thirds-4-3-4 .mainWidth .leftBox,
.footer-thirds-4-3-4 .mainWidth .rightBox {
    width: min(calc(var(--main-width-basis) * 0.35), 100%);
}
.footer-thirds-4-3-4 .mainWidth .centerBox {
    width: min(calc((var(--main-width-basis) - (2 * var(--main-width-padding))) * 0.25), 100%);
}

/* @media (min-width: 1080px) {
    footer {
        height: 150vh;
    }
} */


@media (max-width: 1152px) {
    .leftBox {
        order: 1;
    }
    .centerBox {
        order: 3;
    }
    .rightBox {
        order: 2;
    }
}
@media (max-width: 880px) {
    .leftBox {
        order: 1;
    }
    .centerBox {
        order: 2;
    }
    .rightBox {
        order: 3;
    }
}
</style>