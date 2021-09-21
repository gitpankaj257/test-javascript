function printStartExecutionTime(functionName){
      var dateStr = new Date();
      var d = new Date(dateStr);
      var dformat = d.getFullYear()+'-'+(("0" + (d.getMonth() + 1)).slice(-2))+'-'+("0" + d.getUTCDate()).slice(-2)+' '+("0" + d.getHours()).slice(-2)+':'+("0" + d.getMinutes()).slice(-2)+':'+("0" + d.getSeconds()).slice(-2)+':'+d.getMilliseconds();
      console.log("\n Calling "+functionName+"...........");
      console.log("Execution start time: "+ dformat);
  }
var emailArr = [
  'hrose@dynamicquest.com',
  'cbean@dynamicquest.com',
  'dhanooman@dynamicquest.com',
  'leo@fanhero.com',
  'chayapoltorak@fidelitypayment.com',
  'sfiesel@fidelitypayment.com',
  'apollak@fidelitypayment.com',
  'gsarkisova@globaledit.com',
  'tate@intertrend.com',
  'ttalaska@kochava.com',
  'g.tim@meritech.com',
  'jconrad@nextlabs.com',
  'mhooper@nextlabs.com',
  'sharon.baumgartner@nextlabs.com',
  'dreeves@premier-business.com',
  'jberry@premier-business.com',
  'dmiller@premier-business.com',
  'jbeal@pyramidsolutions.com',
  'dkosmalski@pyramidsolutions.com',
  'jmcmellon@pyramidsolutions.com',
  'skearns@riverlogic.com',
  'mike.pape@rmmsolutions.com',
  'jackie.edwards@rmmsolutions.com',
  'arthur.corallo@rmmsolutions.com',
  'anthony.garner@steinias.com',
  'tedfordpicha@socalgroupinc.com',
  'csmith@tintri.com',
  'kbartz@tintri.com',
  'edaria@tintri.com',
  'rick.n@tylermedia.com',
  'chris.f@tylermedia.com',
  'kyle.m@tylermedia.com',
  'llorezon.pabillore@ugei.com',
  'brooke.ruggiero@ugei.com',
  'mateo.chaskel@ugei.com',
  'john.everette@walkersands.com',
  'courtney.beasley@walkersands.com',
  'alex.yeadon@walkersands.com',
  'jamiebolton@wideorbit.com',
  'dmurphy@wideorbit.com',
  'daston@wideorbit.com',
  'mdurkin@3clogic.com',
  'vnehru@3clogic.com',
  'agoel@3clogic.com',
  'pscaramuzzo@burwood.com',
  'cbarry@burwood.com',
  'jcourtney@burwood.com',
  'jgalatis@marcusa.com',
  'joverkamp@nhlearningsolutions.com',
  'roy.bruinsma@nhls.com',
  'jbergstrom@phillipsmfg.com',
  'jason.lugo@siteminder.com',
  'aubrey.elliott@siteminder.com',
  'kristina.krause@siteminder.com',
  'darren.aspinall@sonicfoundry.com',
  'megan@sonicfoundry.com',
  'maya.williams@sonicfoundry.com',
  'msantos@stollemachinery.com',
  'scott.lindesmith@stollemachinery.com',
  'vagarwal@xtivia.com',
  'nir@xtivia.com',
  'dguinan@xtivia.com',
  'jayne.gresalfi@davidlerner.com',
  'pallen@isgtech.com',
  'sfleming@isgtech.com',
  'sstrickler@isgtech.com',
  'cdenton@nanigans.com',
  'zp@nanigans.com',
  'rtarvin@viamediatv.com',
  'bjones@viamediatv.com',
  'rlykes@viamediatv.com',
  'rshantz@omnicable.com',
  'gdonato@omnicable.com',
  'sglinski@omnicable.com',
  'fcanonge@centricsoftware.com',
  'rrangan@centricsoftware.com',
  'scharbin@centricsoftware.com',
  'kate@stripe.com',
  'chris@stripe.com',
  'cglennon@stripe.com',
  'bpurdy@buxtonco.com',
  'dglover@buxtonco.com',
  'phillip.crow@buxtonco.com',
  'dfaulkner@alertlogic.com',
  'bryan.urioste@alertlogic.com',
  'cbacher@alertlogic.com',
  'brady.cale@taulia.com',
  'jackie.parsnip@taulia.com',
  'sara.irshad@curemd.com',
  'hrose@dynamicquest.com',
  'cbean@dynamicquest.com',
  'd.hanooman@dynamicquest.com',
  'rick@edictsystems.com',
  'leo@fanhero.com',
  'chayapoltorak@fidelitypayment.com',
  'sfiesel@fidelitypayment.com',
  'apollak@fidelitypayment.com',
  'gsarkisova@globaledit.com',
  'tate.allen@intertrend.com',
  'lcarroll@kelsercorp.com',
  'ttalaska@kochava.com',
  'g.tim@meritech.com',
  'jconrad@nextlabs.com',
  'mhooper@nextlabs.com',
  'dreeves@premier-business.com',
  'jbeal@pyramidsolutions.com',
  'dkosmalski@pyramidsolutions.com',
  'jmcmellon@pyramidsolutions.com',
  'kfisher@riverlogic.com',
  'skearns@riverlogic.com',
  'mike.pape@rmmsolutions.com',
  'arthur.corallo@rmmsolutions.com',
  'anthony.garner@steinias.com',
  'tedfordpicha@socalgroupinc.com',
  'csmith@tintri.com',
  'kbartz@tintri.com',
  'edaria@tintri.com',
  'rick.n@tylermedia.com',
  'chris.f@tylermedia.com',
  'kyle.m@tylermedia.com',
  'mateo.chaskel@ugei.com',
  'john.everette@walkersands.com',
  'courtney.beasley@walkersands.com',
  'alex.yeadon@walkersands.com',
  'jamiebolton@wideorbit.com',
  'dmurphy@wideorbit.com',
  'daston@wideorbit.com',
  'mdurkin@3clogic.com',
  'vnehru@3clogic.com',
  'agoel@3clogic.com',
  'pscaramuzzo@burwood.com',
  'cbarry@burwood.com',
  'jcourtney@burwood.com',
  'jjones@marcusa.com',
  'jgalatis@marcusa.com',
  'joverkamp@nhlearningsolutions.com',
  'gkeigwin@nhlearningsolutions.com',
  'roy.bruinsma@nhls.com',
  'jbergstrom@phillipsmfg.com',
  'jason.lugo@siteminder.com',
  'aubrey.elliott@siteminder.com',
  'kristina.krause@siteminder.com',
  'darren.aspinall@sonicfoundry.com',
  'megan@sonicfoundry.com',
  'maya.williams@sonicfoundry.com',
  'mark.santos@stollemachinery.com',
  'scott.lindesmith@stollemachinery.com',
  'vivek.agarwal@xtivia.com',
  'nir@xtivia.com',
  'dguinan@xtivia.com',
  'jayne.gresalfi@davidlerner.com',
  'kyle.wendel@davidlerner.com',
  'sfleming@isgtech.com',
  'sstrickler@isgtech.com',
  'cdenton@nanigans.com',
  'zp@nanigans.com',
  'rtarvin@viamediatv.com',
  'bjones@viamediatv.com',
  'rshantz@omnicable.com',
  'gdonato@omnicable.com',
  'fcanonge@centricsoftware.com',
  'rrangan@centricsoftware.com',
  'scharbin@centricsoftware.com',
  'kate@stripe.com',
  'chris@stripe.com',
  'cglennon@stripe.com',
  'bpurdy@buxtonco.com',
  'dglover@buxtonco.com',
  'phillip.crow@buxtonco.com',
  'dfaulkner@alertlogic.com',
  'bryan.urioste@alertlogic.com',
  'cbacher@alertlogic.com',
  'brady.cale@taulia.com',
  'sara.irshad@curemd.com',
  'pankajverma257@gmail.com',
  'pverma@arcgate.com',
  'sujit@arcgate.com'
];
/*
emailArr = [
  'd.hanooman@dynamicquest.com',
  'cbean@dynamicquest.com',
  'dhanooman@dynamicquest.com'
]
var domain = 'dynamicquest.com';
*/
function arrayUnique(items){
    var returnArr = []
    for (var i=0;i<items.length;i++) {
      if(!isNaN(parseInt(items[i]))) {
        returnArr.push(parseInt(items[i]))
      }else{
        returnArr.push(items[i])
      }
    }
    return Array.from(new Set(returnArr))
  };

var finalArr =[];
var finalEmailArr = [];
for (var i=0;i<emailArr.length;i++) {
  var s = emailArr[i].split('@');
  if (finalArr.indexOf(s[1]) == -1) {
    finalArr.push(s[1])
    finalEmailArr.push(emailArr[i])
  }
}

finalEmailArr = emailArr;
finalEmailArr = arrayUnique(finalEmailArr)
console.log(finalEmailArr.length)


var async           = require('async');
var validEmailCheck = require('valid-email-check');

var fromemail       = "honey@mail.honeytools.io";
var subdomain       =  "mail.honeytools.io";

printStartExecutionTime("StartTime With valid-email-check ============== >")

var functionArray   = [];
var responseResult  = [];
var domainObj       = {};

var parallelFunctionArr   = [];

// =================================================================================================================
// validEmailCheck : emailVerify : START // Better Perform from check
// =================================================================================================================


/*
async.forEachOf(finalEmailArr, function (email, key, nextOne) {
  var mailDomain = email.split("@")[1];
  if (!domainObj[mailDomain]) {
    domainObj[mailDomain] = [];
  }
  domainObj[mailDomain].push(email)
  nextOne();
}, function(loopdone){
 
 console.log(finalEmailArr.length);
 console.log(Object.keys(domainObj).length);


  var totalCount = 0;
  async.forEachOf(domainObj, function (sameDomainEmailArr, domainKey, nextTwo) {
    totalCount += sameDomainEmailArr.length;
    var t = function(callback){
      validEmailCheck.emailVerify(domainKey, sameDomainEmailArr,fromemail,subdomain, function(error, response){    
   //       console.log("response emailVerify response ======= ", response)
     //     console.log("response emailVerify error ======= ", error)
          //responseResult.push(response)
          callback(null, response)
      });
    };
    parallelFunctionArr.push(t);
    nextTwo();
  },function(loopdone){
    console.log("loopdone === totalCount ======", totalCount)
    async.parallel(parallelFunctionArr, function(err,result){
      console.log("00000000000000000")
      console.log(result.length)
      console.log(result)
      var verifiedEmail = [];
      var unverifiedEmail = [];
      var emails = [];
      for(var r=0;r<result.length;r++) {
        verifiedEmail   = verifiedEmail.concat(result[r]['verified'])
        unverifiedEmail = unverifiedEmail.concat(result[r]['unverified'])
        if (result[r]['emails']) {
          emails = emails.concat(result[r]['emails'])  
        }
        
      }

      console.log("Total verifiedEmail Count  ==== ", verifiedEmail.length)
      console.log("Total un-erifiedEmail Count  ==== ", unverifiedEmail.length)
      console.log("Total email with no check Count  ==== ", emails.length)

      console.log("verifiedEmails", verifiedEmail)
      console.log("un-verifiedEmails", unverifiedEmail)
      console.log("emails", emails)

      printStartExecutionTime("EndTime With valid-email-check ============== >")
    })  
  })

});
*/

// =================================================================================================================
// validEmailCheck : emailVerify : START
// =================================================================================================================




// =================================================================================================================
// validEmailCheck : check : START
// =================================================================================================================

var parallelFunctionArr   = [];

async.forEachOf(finalEmailArr, function (email, key, nextOne) {
  var mailDomain = email.split("@")[1];
  if (!domainObj[mailDomain]) {
    domainObj[mailDomain] = [];
  }
  domainObj[mailDomain].push(email)
  nextOne();
}, function(loopdone){
  console.log("domainObj ========== ", domainObj)
  console.log("domainObj Length ========== ", Object.keys(domainObj).length)

  async.forEachOf(domainObj, function (sameDomainEmailArr, key, nextTwo) {
    var waterfallFunctionArr  = [];
    async.forEachOf(sameDomainEmailArr, function (emailVal, key, nextThree) {
      var t = function(callback){
        try{
          validEmailCheck.check([emailVal],15000,fromemail,subdomain, function(response,error){
            if (response == 'Error') {
              console.log("Error = in = ", emailVal)
            } else {
              for(var s in response) {
                  //console.log("response ======= ", response[s])
                  responseResult.push({"status":response[s], "email":emailVal})
                  break;
              }
            }
            //responseResult.push({"status":response})
            //console.log(response[0][0])
            //callback(null, {"status":response})
            callback(null)
          });
        }catch(err){
          console.log("err ---------------------------------------------------------------------------------- ", err)
          //callback(null, {"status":err, "email":emailVal})
          // responseResult.push({"status":err, "email":emailVal})
          callback(null)
        };
      };
      waterfallFunctionArr.push(t);
      nextThree();
    }, function(loopdone){
      parallelFunctionArr.push(waterfallFunctionArr)
      nextTwo();
    });
  },function(loopdone){
    var funList = [];
    async.forEachOf(parallelFunctionArr , function(item,key,next){
      var f = function(callback){ 
        async.waterfall(item, function(err,result){
          if(err){
            callback(null, null);
          }else{
            callback(null, null);
          }
        })
      }
      funList.push(f)
      next()  
    }, function(loopdone){
      async.parallel(funList, function(err,result){
        console.log("00000000000000000")
        console.log(responseResult)
        var verifiedEmail =[];
        var unverifiedEmail =[];

        for(var r=0;r<responseResult.length;r++) {
          if (responseResult[r]['status'][0]) {
            verifiedEmail.push(responseResult[r]['email'])
          } else {
            unverifiedEmail.push(responseResult[r]['email'])
          }
        }

        console.log("Total verifiedEmail Count  ==== ", verifiedEmail.length)
        console.log("Total un-erifiedEmail Count  ==== ", unverifiedEmail.length)

        console.log("Total verifiedEmail   ==== ", verifiedEmail)
        console.log("Total un-erifiedEmail  ==== ", unverifiedEmail)
        
        printStartExecutionTime("EndTime With valid-email-check ============== >")
      })  
    })
  })

});

// =================================================================================================================
// validEmailCheck : check : END
// =================================================================================================================


/*validEmailCheck.emailVerify(domain, finalEmailArr,fromemail,subdomain, function(error, response){    
    console.log("response emailVerify response ======= ", response)
    console.log("response emailVerify error ======= ", error)
});*/

