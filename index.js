const mineflayer = require('mineflayer');

const botArgs = {
    host: '',
    version: '',
    username: '',
    password: '',
    auth: ''
};

const initBot = () => {
    let bot = mineflayer.createBot(botArgs);

    const prefix = '!';

    bot.on('end', (reason) => {
        setTimeout(initBot, 5000);
    });

    bot.once('login', () => {
        bot.chat(`quicBot just hopped in after an update/restart!`);
    });

    bot.on('chat', (username, jsonMsg) => {
        console.log(`${username}: ${jsonMsg}`);

        if (jsonMsg.startsWith(`$`)) {
            const msg = jsonMsg.slice(1);
            const args = msg.split(' ');

            if (!args[0]) return;

            if (args[0].toLowerCase() === `repeat`) {
                const message = jsonMsg.replace(`$repeat `, ``);

                bot.chat(message);
            }
        }

        if (jsonMsg.startsWith(prefix)) {
            const msg = jsonMsg.slice(1);
            const args = msg.split(' ');

            if (!args[0]) return;

            if (args[0].toLowerCase() === `online`) {
                bot.chat(`${Object.keys(bot.players).length} players online.`);
            }

            if (args[0].toLowerCase() === `gay`) {
                if (!args[1]) {
                    bot.chat(`${username} is ${Math.floor( Math.random() * ( 1 + 100 - 1 ) ) + 1}.${Math.floor( Math.random() * ( 1 + 99 - 1 ) ) + 1}% gay`);
                } else {
                    bot.chat(`${args[1]} is ${Math.floor( Math.random() * ( 1 + 100 - 1 ) ) + 1}.${Math.floor( Math.random() * ( 1 + 99 - 1 ) ) + 1}% gay`);
                }           
            }

            if (args[0].toLowerCase() === `coords`) {
                const arr = ['-', ''];

                const x = arr[Math.floor(Math.random() * arr.length)];
                const z = arr[Math.floor(Math.random() * arr.length)];

                bot.chat(`im at X: ${x}${Math.floor(Math.random() * (1 + 30000000 - 1)) + 1}, Y: ${Math.floor(Math.random() * (1 + 256 - 1)) + 1}, Z: ${z}${Math.floor(Math.random() * (1 + 30000000 - 1)) + 1} (Overworld)`);
            }

            if (args[0].toLowerCase() === `pitch`) {
                bot.chat(`my camera pitch is ${bot.entity.pitch}`);
            }

            if (args[0].toLowerCase() === `yaw`) {
                bot.chat(`my camera pitch is ${bot.entity.yaw}`);
            }

            if (args[0].toLowerCase() === `ping`) {
                if (!args[1]) {
                    bot.chat(`${username}'s ping is ${bot.players[username].ping}ms`);
                } else {
                    if (args[1] in bot.players) {
                        bot.chat(`${args[1]}'s ping is ${bot.players[args[1]].ping}ms`);
                    } else {
                        bot.chat(`Player not found!`);
                    }
                }
            }

            if (args[0].toLowerCase() === `doxx`) {
                if (!args[1]) {
                    bot.chat(`${username}'s ip ${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1} ez!`);
                } else {
                    bot.chat(`${args[1]}'s ip ${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1}.${Math.floor(Math.random() * (1 + 255 - 1)) + 1} ez!`);
                }
            }

            if (args[0].toLowerCase() === `health`) {
                bot.chat(`health: ${Math.round(bot.health)}, hunger: ${Math.round(bot.food)}`);
            }

            if (args[0].toLowerCase() === `hunger`) {
                bot.chat(`hunger: ${Math.round(bot.food)}, health: ${Math.round(bot.health)}`);
            }

            if (args[0].toLowerCase() === `y/n`) {
                const arr = ['NO', 'YES'];

                const answer = arr[Math.floor(Math.random() * arr.length)];

                bot.chat(answer);
            }

            if (args[0].toLowerCase() === `roast`) {
                const arr = [`If your brain was chocolate it wouldn't fill an M&M, ${username}!`, `shut up, youll never be the man your mother is, ${username}!`];

                const answer = arr[Math.floor(Math.random() * arr.length)];

                bot.chat(answer);
            }

            if (args[0].toLowerCase() === `kit`) {
                if (!args[1]) {
                    return bot.chat(`Please provide username/kit name`);
                } else {
                    bot.chat(`${username} just recived the kit called ${args[1]}`);
                }
            }

            if (args[0].toLowerCase() === `rules`) {
                bot.chat(`RULES: NO HACKING, NO SWEARING, NO SPAMMING, NO GRIEFING report offenders with !report <player> <reason>`);
            }

            if (args[0].toLowerCase() === `report`) {
                if (!args[1]) {
                    return bot.chat(`Provide a player or a reason!`);
                } else {
                    if (args[1] && !args[2]) {
                        bot.chat(`${args[1]} got reported by ${username}.`);
                    } else if (args[1] && args[2]) {
                        bot.chat(`${args[1]} got reported by ${username} for ${args[2]}.`);
                    }
                }
            }

            if (args[0].toLowerCase() === `8ball`) {
                if (args[1]) {
                    const arr = ["It is certain.",
                        "It is decidedly so.",
                        "Without a doubt.",
                        "Yes - definitely.",
                        "You may rely on it.",
                        "As I see it, yes.",
                        "Most likely.",
                        "Outlook good.",
                        "Yes.",
                        "Signs point to yes.",
                        "Reply hazy, try again.",
                        "Ask again later.",
                        "Better not tell you now.",
                        "Cannot predict now.",
                        "Concentrate and ask again.",
                        "Don't count on it.",
                        "My reply is no.",
                        "My sources say no.",
                        "Outlook not so good.",
                        "Very doubtful."]

                    const answer = arr[Math.floor(Math.random() * arr.length)];
                    bot.chat(answer);
                }
            }
        }
    });
};

initBot();
