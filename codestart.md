Beginning of game: Speed - Affects amount of miles traveled per turn
Gathering - Affects amount of crystals gained while gathering
Health - Affects maximum HP

1000 Miles to Haven

Game Start
milesToGoal: 1000
speed: 1
health: 1
gathering: 1
daysRemaining: 150

maxHP: health * 300
crystals: 300

Each turn choose 1:

Travel function
milesToGoal =- speed * 10
eventCheck = random 20% chance
daysRemaining =- 1
crystals =- 10

Gather function
crystals += gathering * 20
daysRemaining =- 1
eventCheck = random 50% chance

Rest function
crystals =- 5
daysRemaining =- 1
HP =+ health * 50
eventCheck = random 10%

Heal function
crystals -= 30
hp += health * 20 - 50

// HP will lower based on events

Travel events: +1 days remaining
+2 days remaining
+3 days remaining
-1 days remaining
-2 days remaining
-3 days remaining
-10 crystals
-20 crystals
+10 crystals
+20 crystals
-10 HP
-25 HP
-50 HP
+10HP and +10crystals
-10HP and -10crystals

Gather events: +1 days remaining
-1 days remaining
-10 crystals
-20 crystals
+10 crystals
+20 crystals
+30 crystals
-10 HP
-50 HP
-100 HP
+10HP and +10crystals
-10HP and -10crystals

Rest events: -50 crystals
+50 crystals
-20 HP
100% HP heal
+1 days remaining
-1 days remaining

Every 100 miles there is a monument
Allows you to increase your gathering, speed or HP by 1
