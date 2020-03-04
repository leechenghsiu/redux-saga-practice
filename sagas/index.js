export default function* rootSaga() {
	yield [
		watchRequestLogin()
	]
}
