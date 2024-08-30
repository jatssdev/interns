let val = 12
try {
    if (val > 10) throw 'value is more then  10'

    console.log('value is okay')

} catch (e) {
    console.log('error ', e)
}