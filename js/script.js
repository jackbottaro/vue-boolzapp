
const root = new Vue({
    el: '#root',
    data: {
        newMessage: '',
        currentIndex: 0,
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
                    text: 'Stasera festeggiamo!',
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
                    text: 'Bella idea',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 13:12:44',
                    text: 'Speriamo che il tempo non deluda',
                    status: 'sent'
                }
                ],
            },
        ],
    },
    methods: {
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
    },
});
