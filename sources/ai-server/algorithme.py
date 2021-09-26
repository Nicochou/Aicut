 #!/usr/bin/python

#- * -coding: utf - 8 - * -
import sys
nbFollowers = sys.argv[1]
nbSubs = sys.argv[2]
nbCurrentViewers = sys.argv[3]
# nbDb = sys.argv[4]
# nbMessageSec = sys.argv[5]
# faceExprenssion = sys.argv[6]
# nbCurrentViewersM1 = sys.argv[7]
# nbMessageSecM1 = sys.argv[8]
# startTime = sys.argv[9]
test = False

if nbFollowers != None and nbSubs != None and nbCurrentViewers != None :
    test = True
# nbMessageSecX2 = nbMessageSec * 2

# pourcentageCurrentViewers = nbCurrentViewersM1 / 10
# pourcentageCurrentViewers = pourcentageCurrentViewers * 2
# nbCurrentViewersM1 = nbCurrentViewersM1 + pourcentageCurrentViewers

# pourcentageMessageSec = nbMessageSecM1 / 10
# pourcentageMessageSec = pourcentageMessageSec * 2
# nbMessageSecM1 = nbCurrentViewersM1 + pourcentageMessageSec

# if nbMessageSecX2 > nbCurrentViewers:
#     test = 'true'
# if nbMessageSecM1 < nbMessageSec and startTime > 1200:
#     test = 'true'
# if nbDb > 70:
#     test = 'true'
# if nbCurrentViewersM1 < nbCurrentViewers and startTime > 1200:
#     test = 'true'

print(test)
sys.stdout.flush()