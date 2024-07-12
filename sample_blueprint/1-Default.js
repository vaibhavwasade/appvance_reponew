var $baseURL = "https://demosite.appvance.net";

setFailOnValidations(true);
prepareDomain($baseURL);
setShadowDOM(true);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
navigateTo($baseURL);
/*Error during setup: com.appvance.aitestgen.exceptions.EngineManagerInitializationException: Can't initialize DSManager
	at com.appvance.aitestgen.engine.DSManager.<init>(DSManager.java:65)
	at com.appvance.aitestgen.thread.web.WebBrowserThread.setup(WebBrowserThread.java:74)
	at com.appvance.aitestgen.thread.BaseExtractorThread.run(BaseExtractorThread.java:194)
	at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)
	at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)
	at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)
	at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)
	at java.base/java.lang.Thread.run(Thread.java:829)
Caused by: java.net.ConnectException: Connection refused: connect
	at java.base/java.net.PlainSocketImpl.connect0(Native Method)
	at java.base/java.net.PlainSocketImpl.socketConnect(PlainSocketImpl.java:101)
	at java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)
	at java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)
	at java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)
	at java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
	at java.base/java.net.Socket.connect(Socket.java:609)
	at java.base/java.net.Socket.connect(Socket.java:558)
	at java.base/java.net.Socket.<init>(Socket.java:454)
	at java.base/java.net.Socket.<init>(Socket.java:231)
	at com.appvance.ds.client.NetworkClient.connect(NetworkClient.java:84)
	at com.appvance.ds.client.NetworkClient.process(NetworkClient.java:104)
	at com.appvance.ds.client.NetworkClient.get(NetworkClient.java:127)
	at com.appvance.ds.client.NetworkClient.getString(NetworkClient.java:131)
	at com.appvance.ds.client.DSConnectionClient.doGet(DSConnectionClient.java:40)
	at com.appvance.ds.client.DSBasicClient.startSession(DSBasicClient.java:638)
	at com.appvance.aitestgen.engine.DSManager.<init>(DSManager.java:43)
	... 7 more
*/
