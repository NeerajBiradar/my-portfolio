import java.util.*;

class Test{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        String[] inp = sc.nextLine().split(" ");
        int r = Integer.parseInt(inp[0]);
        int c = Integer.parseInt(inp[1]);
        int[][] vis = new int[400][400];
        for(int[] i : vis){
            Arrays.fill(i,0);
        }
        helper(vis,200,200,200+r,200+c,0);
    }
    public static void helper(int[][] vis,int i,int j,int r,int c,int step){
        System.out.println(i+" "+j+" "+step);
        if(isValid(vis,i,j)){
            vis[i][j] = 1;
            if(i==r && j==c){
                System.out.println(step);
                return;
            }
            helper(vis,i-2,j-1,r,c,step+1);
            helper(vis,i-2,j+1,r,c,step+1);
            helper(vis,i+2,j-1,r,c,step+1);
            helper(vis,i+2,j+1,r,c,step+1);
            helper(vis,i-1,j-2,r,c,step+1);
            helper(vis,i+1,j-2,r,c,step+1);
            helper(vis,i-1,j+2,r,c,step+1);
            helper(vis,i+1,j+2,r,c,step+1);
        }
        return;
    }
    public static boolean isValid(int[][] vis,int i,int j){
        return (i>=0) && (i<400) &&(j>=0) && (j<400) && (vis[i][j]!=1);
    }
}