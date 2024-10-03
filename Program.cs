namespace ConsoleApp1
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Enter a string, please:");
      string? input = Console.ReadLine();

      string longestWord = GetTheLongestWord(input ?? string.Empty);
      Console.WriteLine("Longest word is: " + longestWord);
    }

    static string GetTheLongestWord(string message)
    {
      if(string.IsNullOrEmpty(message))
      {
        return string.Empty;
      }

      string[] words = message.Split(' ');
      return words.OrderByDescending(word => word.Length).FirstOrDefault() ?? string.Empty;
      }
  }
}
