
const root = new Vue({
    el: '#root',
    data: {
        newMessage: '',
        currentIndex: 0,
        search: '',
        user: {
            name: 'Giacomo Bottaro',
            avatar: '_io'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2022 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2022 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2022 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2022 09:16:00',
                    text: "Hey fabio come è andato l'esame?",
                    status: 'sent'
                },
                {
                    date: '20/03/2022 10:30:00',
                    text: "Benissimo sono riuscito a passarlo",
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Stasera festeggiamo! 🥳🥳🥳',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2022 15:10:00',
                    text: 'Mi riesci a passare i compiti?',
                    status: 'received'
                },
                {
                    date: '28/03/2022 15:10:45',
                    text: 'Purtroppo mi sono dimenticato di scriverli',
                    status: 'received'
                },
                {
                    date: '28/03/2022 15:32:00',
                    text: 'Al momento non sono a casa, te li mando dopo',
                    status: 'sent'
                },
                {
                    date: '28/03/2022 15:45:53',
                    text: 'Perfetto',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2022 12:30:12',
                    text: 'Questo week-end cosa facciamo?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 12:50:22',
                    text: 'Andiamo al lago?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 13:12:00',
                    text: 'Bella idea 😊',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 13:12:44',
                    text: 'Speriamo che il tempo non deluda',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Alessandro',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '20/03/2022 09:16:00',
                    text: "Come stai?",
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:30:00',
                    text: "Tutto bene, tra poco finisco di lavorare, se vuoi ci vediamo al bar",
                    status: 'sent'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Volentieri',
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Fammi uno squillo quando finisci',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Rossella',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '20/03/2022 09:16:00',
                    text: "Come sono andate le vacanze?",
                    status: 'sent'
                },
                {
                    date: '20/03/2022 10:30:00',
                    text: "Un incubo 😭, quando ci vediamo ti racconto come sono andate",
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Era meglio se fossi stata a casa',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Antonio',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '20/03/2022 09:16:00',
                    text: "Allora con le crypto come sei messo? Quando ti prendi il Ferrari?🤑",
                    status: 'sent'
                },
                {
                    date: '20/03/2022 10:30:00',
                    text: "Mi tocca rimandare l'acquisto del ferrari 😢",
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Ho perso tutti i soldi su Dogecoin 💩',
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Dovevi seguire le mie dritte su Bitcoin',
                    status: 'sent'
                },
                ],
            },
            {
                name: 'Ciro',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '20/03/2022 09:16:00',
                    text: "Come sono andati i colloqui?",
                    status: 'sent'
                },
                {
                    date: '20/03/2022 10:30:00',
                    text: "Mi hanno assunto!!!😁😁",
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Da lunedi inizio a lavorare per Google',
                    status: 'received'
                },
                {
                    date: '20/03/2022 10:31:56',
                    text: 'Metti una buona parola per me😏',
                    status: 'sent'
                }
                ],
            },
            
        ],
    },
    methods: {
        // AL INVIO DI UN NUOVO MESSAGGIO DA PARTE DEL UTENTE RISPONDE DOPO 1sec CON IN MESSAGGIO DI DEFAUL
        sendNewMessage() {
            const message = this.newMessage.trim();
            if (message) {
                this.contacts[this.currentIndex].messages.push({ text: message, status: 'sent', date: '10/01/2022 18:15:00' });
            }
            this.newMessage = setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({ text: 'Ok', status: 'received', date: '10/01/2022 18:15:34' });
            }, 1000);
            this.newMessage = '';
        },
        setActiveClass(index) {
            this.currentIndex = index;
        },
        searchContacts() {
            const newSearch = this.search.trim().toLowerCase();
            const result = this.contacts.filter((contact) => {
                if (contact.name.toLowerCase().includes(newSearch)) {
                    return contact.visible = true;
                }
                return contact.visible = false;
            })
            return result;
        },
        randomNumber(min, max) {
            const number = Math.floor(Math.random() * (max - min + 1)) + min;
                return number
        },

        FUNZIONE CHE CAMBIA IL VALORE DEL
        deleteMessage(index) {
            this.contacts[this.currentIndex].messages.splice(index, 1);
        },
    },
});

