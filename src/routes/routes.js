import {Router} from 'express'

const router = Router()

router.get('/usuario', (req, res, next) => {
    console.log({mensagen: "Hello Usuario"})
})

router.get("/usuario/:id", (req, res, next) => {
  console.log({ mensagen: "Hello Usuario" });
});

router.post("/usuario", (req, res, next) => {
  console.log({ mensagen: "Hello Usuario" });
});

router.put("/usuario", (req, res, next) => {
  console.log({ mensagen: "Hello Usuario" });
});

router.delete("/usuario", (req, res, next) => {
  console.log({ mensagen: "Hello Usuario" });
});

export default router
