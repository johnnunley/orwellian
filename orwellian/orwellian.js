/*
 
This file is part of Joseph.

Joseph is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Joseph is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Joseph.  If not, see <http://www.gnu.org/licenses/>.

*/

var config = {
  channels: [ "#ftc" ],
  server: "irc.synirc.net",
  botName: "orwellian"
};

var irc = require("irc");

var bot = new irc.Client(config.server, config,botName);

bot.join("#ftc", callback);

bot.addListener("message#channel",function(nick,text,message){
  
});
