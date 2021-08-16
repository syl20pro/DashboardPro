//Déclaration des couleurs //

const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

// Graphique Chartjs //
var ctx = document.getElementById('myChart')
ctx.height = 500
ctx.width = 500
var data = {
    labels: ['Janvier', 'Février', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    datasets: [{
        fill: false,
        label: 'Valeur portefeuille',
        borderColor: successColor,
        data [6520, 6781, 6824, 6936, 7004, 7088, 7154, 7176, 7182, 7202, 7234, 7284],
        borderWidth: 3,
        lineTension: 0,
    }, {
        fill: false,
        label: 'Dividendes perçus',
        borderColor: primaryColor,
        data [232, 261, 43, 112, 68, 84, 66, 22, 6, 20, 32, 50],
        borderWidth: 3,
        lineTension: 0,
    }]
}

var lineChart = new CharacterData(ctx, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        bezierCurve: false,
    }
})